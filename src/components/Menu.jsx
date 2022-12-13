import React from 'react';
import gambar from '../../public/hero.jpg';
export const Menu = () => {
	return (
		<section>
			<div className="container-xl bg-fixed">
				<img src={gambar} alt="" className="w-screen h-screen object-cover " />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad
					adipisci culpa unde mollitia, sunt exercitationem facere porro iusto
					illo?
				</p>
			</div>
		</section>
	);
};
