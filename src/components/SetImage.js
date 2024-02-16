export default function SetImage ({imgSrc, pt}){
  return(
    <div className="set-image" style={{paddingTop: pt}}>
      <img src={imgSrc} />
    </div>
  )
}