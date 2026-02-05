import html2pdf from "html2pdf.js";

export default function DownloadPDF() {
  const handleDownload = () => {
    const element = document.getElementById("resume");

    const options = {
      margin: 0.5,
      filename: "Jacqueline_Valois_Curriculo.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <button className="toggle" onClick={handleDownload}>
      📄 Download PDF
    </button>
  );
}
