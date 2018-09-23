from pdfminer.layout import LAParams
from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfpage import PDFTextExtractionNotAllowed
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.pdfdevice import PDFDevice
from pdfminer.converter import PDFPageAggregator

import logging


def run():
  # Open a PDF file.
  fp = open('data/Roll_Call_Vote_-_Washinton_State_Legislature.pdf', 'rb')
  # Create a PDF parser object associated with the file object.
  parser = PDFParser(fp)
  # Create a PDF document object that stores the document structure.
  # Supply the password for initialization.
  document = PDFDocument(parser, 'foobar')
  # Check if the document allows text extraction. If not, abort.
  if not document.is_extractable:
      raise PDFTextExtractionNotAllowed
  # Create a PDF resource manager object that stores shared resources.
  rsrcmgr = PDFResourceManager()
  # Create a PDF device object.
  laparams = LAParams()
  device = PDFPageAggregator(rsrcmgr, laparams=laparams)
  # Create a PDF interpreter object.
  interpreter = PDFPageInterpreter(rsrcmgr, device)
  # Process each page contained in the document.
  for page in PDFPage.create_pages(document):
    interpreter.process_page(page)
    page = device.get_result()

    first_page_text = page.groups[0].get_text()
    with open('foobar.txt', 'w') as some_text:
      some_text.write(first_page_text)
    return

if __name__ == '__main__':
  logging.info('Parsing some pdf data man...')
  run()
