import React, { Component } from 'react'
import ContentHeader from './ContentHeader';

class Content extends Component {
    render () {
        return (
            <div>
                <section id="content">
					<div className="container">
						<div className="row aln-center">
							<div className="col-4 col-12-medium">
								<section>
									<ContentHeader title="This is who we are" subtitle= "We are so cool" />
									<a href="#" className="feature-image"><img src="images/pic05.jpg" alt="" /></a>
									<p>
										Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed.
										Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis
										justo facilisis quis. Sed sagittis amet lorem ipsum.
									</p>
								</section>
							</div>
							<div className="col-4 col-6-medium col-12-small">
									<section>
										<ContentHeader title= "What We Do" subtitle = "subheading about what we do"/>
										<ul className="check-list">
											<li>Sed mattis quis rutrum accum</li>
											<li>Eu varius nibh suspendisse lorem</li>
											<li>Magna eget odio amet mollis justo</li>
											<li>Facilisis quis sagittis mauris</li>
											<li>Amet tellus gravida lorem ipsum</li>
										</ul>
									</section>

							</div>
							<div className="col-4 col-6-medium col-12-small">

									<section>
									<ContentHeader title= "What People Say" subtitle = "subheading about what people say"/>
										<ul className="quote-list">
											<li>
												<img src="images/pic06.jpg" alt="" />
												<p>"Neque nisidapibus mattis"</p>
												<span>Jane Doe, CEO of UntitledCorp</span>
											</li>
											<li>
												<img src="images/pic07.jpg" alt="" />
												<p>"Lorem ipsum consequat!"</p>
												<span>John Doe, President of FakeBiz</span>
											</li>
											<li>
												<img src="images/pic08.jpg" alt="" />
												<p>"Magna veroeros amet tempus"</p>
												<span>Mary Smith, CFO of UntitledBiz</span>
											</li>
										</ul>
									</section>

							</div>
						</div>
					</div>
				</section>
            </div>
        )
    }
}

export default Content