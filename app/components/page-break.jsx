import Image from "next/image";

const PageBreak = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        src="/img/pagebreak.png"
        className="page-break"
        alt="image"
      />
    </div>
  );
};

export default PageBreak;
