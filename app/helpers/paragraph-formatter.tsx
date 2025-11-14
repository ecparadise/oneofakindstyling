export const renderFormattedParagraphs = (text: string, className: string) => {
  const paragraphs = text.split("\n");
  return (
    <>
      {paragraphs.map((para, index) => (
        <p key={index} className={className}>
          {para}
        </p>
      ))}
    </>
  )
};
