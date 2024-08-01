import fitz

doc=fitz.opn('mensa.pdf')
print(doc.page_count)