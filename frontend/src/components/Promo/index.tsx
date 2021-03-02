import React, {Component} from 'react'
export default class Promo extends Component{
  render(){
    return (
			<div className="promo">
				{/* <!-- PROMO --> */}
				<div className="py-3 bg-dark bg-pattern @@classList">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Text --> */}
								<div className="text-center text-white text-change-div">
									<span className="heading-xxs letter-spacing-xl text_one">Express and safe Delivery</span>
									<span className="heading-xxs letter-spacing-xl text_two">Free shipping within 200 €</span>
									<span className="heading-xxs letter-spacing-xl text_three">Register and Get 10% off Now</span>
									<span className="heading-xxs letter-spacing-xl text_four">Pick up new Pieces here</span>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
    )
  }
}