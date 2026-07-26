data = frappe.form_dict

email = data.get("email")
first_name = data.get("first_name")
last_name = data.get("last_name")
phone = data.get("phone")
password = data.get("password")

building_number = data.get("building_number")
street_name = data.get("street_name")
district = data.get("district")
city = data.get("city")
postal_code = data.get("postal_code")

# ── Validation ──────────────────────────────────
if not email or not first_name or not password or not phone:
    frappe.throw(
        "Missing required fields: email, first_name, password, phone",
        frappe.MandatoryError  # → 417
    )

if frappe.db.exists("User", email):
    frappe.throw(
        f"User with email {email} already exists",
        frappe.DuplicateEntryError  # → 409
    )

customer_name = f"{first_name} {last_name or ''}".strip()

try:
    # 1️⃣ Create User
    user = frappe.get_doc({
        "doctype": "User",
        "email": email,
        "first_name": first_name,
        "last_name": last_name,
        "enabled": 1,
        "new_password": password,
        "user_type": "Website User",
        "send_welcome_email": 0,
        "mobile_no": phone,
    })
    user.insert(ignore_permissions=True)
    user.add_roles("Customer")

    # 2️⃣ Create Customer
    customer = frappe.get_doc({
        "doctype": "Customer",
        "customer_name": customer_name,
        "customer_type": "Individual",
        "territory": "Saudi Arabia",
        "portal_users": [{"user": email}],
    })
    customer.insert(ignore_permissions=True)

    # 3️⃣ Create Contact
    contact = frappe.get_doc({
        "doctype": "Contact",
        "first_name": first_name,
        "last_name": last_name or "",
        "email_id": email,
        "is_primary_contact": 1,
        "email_ids": [{"email_id": email, "is_primary": 1}],
        "phone_nos": [{"phone": phone, "is_primary_phone": 1}],
        "links": [{"link_doctype": "Customer", "link_name": customer.name}],
    })
    contact.insert(ignore_permissions=True)

    # 4️⃣ Create Address
    address_line1 = f"{building_number or ''} {street_name or ''}".strip() or customer_name
    address = frappe.get_doc({
        "doctype": "Address",
        "address_title": customer_name,
        "address_type": "Billing",
        "address_line1": address_line1,
        "address_line2": district or "",
        "city": city or "",
        "pincode": postal_code or "",
        "country": "Saudi Arabia",
        "custom_building_number": building_number or "",
        "custom_area": district or "",
        "is_primary_address": 1,
        "links": [{"link_doctype": "Customer", "link_name": customer.name}],
    })
    address.insert(ignore_permissions=True)
    customer.save()
    frappe.db.commit()

    frappe.response["http_status_code"] = 201  # ← Created
    frappe.response["state"] = "success"
    frappe.response["message"] = "User registered successfully"
    frappe.response["customer"] = customer.name
    frappe.response["user"] = email

except frappe.DuplicateEntryError as e:
    frappe.db.rollback()
    frappe.throw(str(e), frappe.DuplicateEntryError)

except frappe.ValidationError as e:
    frappe.db.rollback()
    frappe.throw(str(e), frappe.ValidationError)

except frappe.PermissionError as e:
    frappe.db.rollback()
    frappe.throw(str(e), frappe.PermissionError)

except Exception as e:
    frappe.db.rollback()
    frappe.log_error(frappe.get_traceback(), "Register API Error")
    frappe.throw(str(e))  # → 500