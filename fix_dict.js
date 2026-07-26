const fs = require('fs');
const filePath = 'd:/04- amaken/amaken-website/lib/i18n/dictionaries.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);

// Verify lines contents before action to be safe
const line1117 = lines[1116]; // "    },"
const line1118 = lines[1117]; // "    appraisalPage: {"
const line1252 = lines[1251]; // "    },"
const line1253 = lines[1252]; // "    "about-timeline": {" 
const line1339 = lines[1338]; // "    }," (end of real-estate)

console.log('Line 1117:', line1117);
console.log('Line 1118:', line1118);
console.log('Line 1252:', line1252);
console.log('Line 1253:', line1253);
console.log('Line 1339:', line1339);

if (line1118.includes('appraisalPage') && line1253.includes('about-timeline')) {
    console.log('Verification passed. Proceeding with surgery.');

    // 1. Delete the bad block (lines 1117-1252)
    // Indices: 1116 to 1251.
    // Length: 1251 - 1116 + 1 = 136.
    lines.splice(1116, 136);

    // 2. Insert closing brace for 'about' after 'real-estate'.
    // 'real-estate' end was at 1339 (index 1338).
    // New index = 1338 - 136 = 1202.
    // Insert after 1202, so at 1203.
    // Check if lines[1202] is indeed "    },"
    if (lines[1202].trim() === '},') {
        lines.splice(1203, 0, "    },");
        console.log('Inserted brace at line', 1204);
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log('File updated.');
    } else {
        console.error('Real-estate end mismatch at new index', 1202, lines[1202]);
    }

} else {
    console.error('Verification failed. Aborting.');
}
