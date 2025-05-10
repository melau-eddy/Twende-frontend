/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function PaymentReceipt(data) {
  const doc = new jsPDF();

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Payment Receipt', 15, 15);

  const tableStyles = {
    font: 'helvetica',
    fontSize: 10,
    textColor: [50, 50, 50],
    fillColor: [237, 247, 255],
    halign: 'center',
    cellPadding: { top: 2, right: 2, bottom: 2, left: 2 },
  };

  // Table
  autoTable(doc, {
    startY: 25,
    head: [['Payment Date', 'Customer Name', 'Phone Number', 'Ticket Amount']],
    body: data.map((row) => [row.travelDate, row.customerName, row.customerPhoneNumber, row.ticketAmount]),
    styles: tableStyles,
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      lineColor: [237, 247, 255],
    },
  });

  // Save the PDF
  doc.save('payment_receipt');
}
