import React from 'react'

export const Maketdepth = () => {
    return (
        <div>
            <div className='container market-con'>
                <h3 className='heading'>Market Depth</h3>
                <div className='heading-marketdepth valign-wrapper'>

                    <div className='heading'>

                        Buy Order Quantity
                    </div>
                    <div className='heading'>

                        Sell Order Quantity
                    </div>

                </div>
                <div className='heading-marketdepth valign-wrapper'>
                    <div className='left-align '>
                        <div>
                            30.28 %
                        </div>
                    </div>
                    <div className='valign-wrapper baar-div'>

                        <div className='bar'>
                            
                        </div>
                    </div>
                    <div className='right-align '>
                        <div>
                            69.72 %
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                <div className='heading-marketdepth valign-wrapper '>
                    <div className='valign-wrapper col-4 heading-marketdepth'>
                        <div>
                        <div>Bid Price</div>
                        <div>1500</div>
                        <div>1490</div>
                        <div>1498</div>
                        <div>1496</div>
                        <div>1493</div>
                        </div>
                        
                        <div>
                        <div>Qty</div>
                        <div>100</div>
                        <div>400</div>
                        <div>200</div>
                        <div>300</div>
                        <div>100</div>
                        </div>
                    </div>

                    <div className='valign-wrapper col-4 heading-marketdepth'>
                        <div>
                        <div>Ask Price</div>
                        <div>1498</div>
                        <div>1496</div>
                        <div>1495</div>
                        <div>1490</div>
                        <div>1493</div>
                        </div>

                        <div>
                        <div className='right-align'>Qty</div>
                        <div>100</div>
                        <div>500</div>
                        <div>300</div>
                        <div>100</div>
                        <div>200</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
