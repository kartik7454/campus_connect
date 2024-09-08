/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */





export default function Events(props) {

    
    return(
        <div className="   my-5 ml-14  inline-grid rounded-xl">
         
          <div className="  rounded-lg">
            <img
          className='h-80 w-48 object-cover rounded-lg '
        src={"/images/"+props.image}
    
       
        alt={"img"}
        
        
        
        /></div>
        <div className="w-48 h-44 "> 
       {props.fromdate?<p className='   break-words text-base font-medium   max-h-20 mb-2 truncate w-48 ' >{props.fromdate.slice(0,10)}</p>:null} 
          <h1 className=' font-bold text-lg  text-ellipsis   overflow-hidden italic  h-14 w-48'>{props.title}</h1>
       
        <p className='   break-words text-base font-medium   max-h-20 mb-2 truncate w-48 ' >{props.discription}</p>
        <p className='      ' >{props.category}</p>
        {props.price?<p className='' >{"$"+props.price}</p>:null}
        {props.likes?<p className='' > likes:{props.likes ?props.likes.length:0}</p>:null}
        </div>
       
       
        </div>
      
      
        
        )
  }

  