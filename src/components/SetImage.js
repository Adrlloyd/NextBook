export default function SetImage ({imgSrc, pt, alt = ""}){
  return(
    <div className="set-image" style={{paddingTop: pt}}>
      <img src={imgSrc} alt={alt} />
    </div>
  )
}
