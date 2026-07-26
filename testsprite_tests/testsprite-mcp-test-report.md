
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** amaken-unified-website
- **Date:** 2026-01-19
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Homepage render and bilingual content verification
- **Test Code:** [TC001_Homepage_render_and_bilingual_content_verification.py](./TC001_Homepage_render_and_bilingual_content_verification.py)
- **Test Error:** 
Browser Console Logs:
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/real-estate-marketing-digital-billboard.jpg:0:0)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/luxury-apartment-complex-riyadh.jpg:0:0)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/professional-appraisal-process-blueprint.jpg:0:0)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/modern-auction-hall-saudi-arabia.jpg:0:0)
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/_next/static/media/05d29f0ed5b0e698-s.p.6d7a8113.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/commercial-building-riyadh-saudi-arabia.jpg:0:0)
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/industrial-machinery-equipment-auction.jpg:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/566e3396-6923-4fbc-a857-0ba31713f440/fab0ca3c-c19d-46b0-abe9-3b837947704d
- **Status:** ❌ Failed
- **Analysis / Findings:** The test failed primarily due to missing image assets (404 errors) and network instability causing content length mismatches for font and image files. This likely prevented the homepage from rendering correctly or completely, causing assertions to fail. The missing assets include several placeholder images (e.g., `real-estate-marketing-digital-billboard.jpg`).

---

#### Test TC011 User Portal login with form validation
- **Test Code:** [TC011_User_Portal_login_with_form_validation.py](./TC011_User_Portal_login_with_form_validation.py)
- **Test Error:** 
Browser Console Logs:
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/modern-auction-hall-saudi-arabia.jpg:0:0)
... (similar 404s)
[ERROR] Failed to load resource: net::ERR_INCOMPLETE_CHUNKED_ENCODING (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/566e3396-6923-4fbc-a857-0ba31713f440/fdf01c24-29ed-43a3-933f-1446b5734157
- **Status:** ❌ Failed
- **Analysis / Findings:** The login validation test failed. In addition to missing assets, a critical `ERR_INCOMPLETE_CHUNKED_ENCODING` error occurred for a React DOM chunk. This suggests incomplete Javascript loading, which would prevent the React application, including client-side validation logic, from functioning.

---

#### Test TC015 Theme provider toggling and system preference detection
- **Test Code:** [TC015_Theme_provider_toggling_and_system_preference_detection.py](./TC015_Theme_provider_toggling_and_system_preference_detection.py)
- **Test Error:** 
Browser Console Logs:
... (similar 404s and network errors)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/566e3396-6923-4fbc-a857-0ba31713f440/474d97cc-f61d-44f8-8f09-946b8671c741
- **Status:** ❌ Failed
- **Analysis / Findings:** Theme toggling functionality could not be verified due to the same underlying issues: missing assets and Javascript loading failures (`ERR_INCOMPLETE_CHUNKED_ENCODING`). The application likely did not initialize fully.

---


## 3️⃣ Coverage & Matching Metrics

- **0.00%** of tests passed

| Requirement | Total Tests | ✅ Passed | ❌ Failed |
|---|---|---|---|
| Functional (Homepage, Theme) | 2 | 0 | 2 |
| Error Handling (Login Validation) | 1 | 0 | 1 |
| **Total** | **3** | **0** | **3** |

---


## 4️⃣ Key Gaps / Risks
1. **Missing Static Assets**: Validating the UI is impossible because multiple image resources are returning 404 (Not Found). These need to be added to the `public/` directory or paths corrected.
2. **Environment Instability**: Detailed network errors (`ERR_CONTENT_LENGTH_MISMATCH`, `ERR_INCOMPLETE_CHUNKED_ENCODING`) indicate the testing environment or the local dev server is unstable, preventing proper loading of the application bundles.
3. **Application Hydration Failure**: The failure to load React chunks suggests the application is not hydrating on the client side, meaning interactivity (forms, buttons, theme types) is likely completely broken in the test run.
