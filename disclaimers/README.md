# Email Disclaimers

Location-based, language-specific email disclaimers for professional email signatures.

## Available Disclaimers

### Dutch (Netherlands)
**File:** `disclaimer-nl.html`

**Includes:**
- Confidentiality statement (Dutch)
- Liability disclaimer
- AVG/GDPR privacy notice
- Environmental notice
- Appropriate for Dutch business communication

**Use when:** Communicating with Dutch recipients or within the Netherlands

---

### English (International)
**File:** `disclaimer-en.html`

**Includes:**
- Confidentiality statement (English)
- Liability disclaimer
- GDPR privacy notice
- Environmental notice
- International business standard

**Use when:** Communicating with international recipients

---

## Signature Files with Disclaimers

### With Dutch Disclaimer
**File:** `../signature-with-disclaimer-nl.html`
- Full signature + Dutch disclaimer
- Business details (KvK, BTW, IBAN, BIC)
- "Nederland" for country name

### With English Disclaimer
**File:** `../signature-with-disclaimer-en.html`
- Full signature + English disclaimer
- Business details (CoC, VAT, IBAN, BIC)
- "The Netherlands" for country name

---

## Required Information

Before using disclaimer versions, update these placeholders:

### Dutch Version (signature-with-disclaimer-nl.html)
```html
KvK: [Uw KvK-nummer]           <!-- Chamber of Commerce number -->
BTW: [Uw BTW-nummer]           <!-- VAT number (starts with NL) -->
IBAN: [Uw IBAN]                <!-- Bank account -->
BIC: [Uw BIC]                  <!-- Bank identifier code -->
```

### English Version (signature-with-disclaimer-en.html)
```html
Chamber of Commerce: [Your CoC Number]
VAT: [Your VAT Number]
IBAN: [Your IBAN]
BIC: [Your BIC]
```

---

## Legal Requirements (Netherlands)

### Mandatory Information (Art. 2:364 BW / Art. 2:475 BW)

For **sole proprietorships (eenmanszaak)**:
- ✅ Full name
- ✅ Address
- ✅ KvK number
- ✅ BTW number (if VAT registered)

For **BV/NV (limited companies)**:
- ✅ Legal name
- ✅ Legal form (BV/NV)
- ✅ Location of registration
- ✅ KvK number
- ✅ BTW number

---

## GDPR/AVG Compliance

Both disclaimers include:

### Privacy Notice
- ✅ Statement of GDPR compliance
- ✅ Link to privacy policy
- ✅ Data protection awareness

### Requirements
- Update privacy policy URL: `https://josvisserict.nl/privacy`
- Ensure privacy policy exists and is accessible
- Keep policy up to date

---

## Customization

### Add Your Business Details

1. **Get your KvK number:**
   - Find at [kvk.nl](https://www.kvk.nl)
   - 8-digit number

2. **Get your BTW number:**
   - Format: NL123456789B01
   - Required if VAT-registered

3. **Add banking details (optional but professional):**
   - IBAN format: NL00 BANK 0123 4567 89
   - BIC: 4-letter bank code

### Modify Disclaimer Text

Edit the disclaimer files to:
- Add/remove clauses
- Adjust legal language
- Change formatting
- Add company-specific notices

---

## When to Use Which Version

### Use Dutch Version (NL) for:
- ✅ Dutch clients/customers
- ✅ Netherlands-based communication
- ✅ Government correspondence
- ✅ Local partnerships

### Use English Version (EN) for:
- ✅ International clients
- ✅ English-speaking countries
- ✅ Global partnerships
- ✅ Professional English correspondence

### Use Version Without Disclaimer:
- ✅ Quick internal emails
- ✅ Casual correspondence
- ✅ When brevity is needed
- ✅ Non-business communication

---

## Installation

### Option 1: Signature with Disclaimer
1. Choose language version
2. Update business details
3. Replace `YOUR_HOSTING_URL` with Cloudflare URL
4. Install in email client

### Option 2: Add Disclaimer to Existing Signature
1. Copy content from `disclaimer-nl.html` or `disclaimer-en.html`
2. Paste below your existing signature
3. Adjust styling as needed

---

## Best Practices

### ✅ DO:
- Keep disclaimers concise
- Update annually or when laws change
- Link to your privacy policy
- Match language to recipient
- Include required business info

### ❌ DON'T:
- Make disclaimers too long
- Use threatening or aggressive language
- Include outdated information
- Forget to update links
- Use disclaimers for spam

---

## Multi-Language Setup

### For Bilingual Communication

**Option A: Two Signatures**
- Create Dutch signature in email client
- Create English signature separately
- Switch based on recipient

**Option B: Combined Disclaimer**
Create a bilingual version:
```html
<!-- Dutch -->
<p>Nederlandse disclaimer tekst...</p>

<!-- English -->
<p>English disclaimer text...</p>
```

---

## Legal Disclaimer About Disclaimers

⚠️ **Important:** 
- These are template disclaimers
- Not legal advice
- Consult a lawyer for your specific situation
- Netherlands business law applies
- Keep updated with current regulations

**Resources:**
- [Kamer van Koophandel](https://www.kvk.nl)
- [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl)
- [Rijksoverheid - Business](https://business.gov.nl)

---

## Environmental Notice

The 🌱 environmental notice is optional but recommended:
- Raises awareness
- Shows corporate responsibility
- Common in European business
- Can be removed if preferred

---

## Questions?

See the main [Wiki](https://github.com/Qballjos/Email_Signature_JosVisserICT/wiki) for more information.

