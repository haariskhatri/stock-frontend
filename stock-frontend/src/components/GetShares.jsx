import React,{useState,useEffect} from 'react'

export const GetShares = ({setsharesdata}) => {

    var shareId;
    const [data, setData] = useState([]);
   
    
    useEffect(() => {
        getshares()
            
    }, [])

    const getshares=()=>{
        fetch("http://localhost:4000/getshares")
            .then(response => response.json())
            .then(data => setData(data))
    }

    const getsingleshares=()=>{
        fetch("http://localhost:4000/singleshares/" + shareId)
        .then(response => response.json())
        .then(data => setsharesdata(data))
        
    }
  return (
    <div className='container'>
               
                    
    {data?.shares?.length && (
        data?.shares?.map((shares, key) => {
            console.log(shares)
            return (
                
                    <div className="card ipoadmin" key={key}>
                        <h5 className="card-title">{shares.shareName}</h5>
                        
                        <div className="card-body">
                            <h5 className="card-title">Symbol :{shares.shareSymbol} </h5>
                           

                            <div className='buy-button'>

                                <button className="btn btn-primary" onClick={() => { shareId = shares.shareId; getsingleshares() }}>Buy</button>

                            </div>

                        </div>
                    </div>
                
            )
        })
    )
    }

</div>
  )
}
