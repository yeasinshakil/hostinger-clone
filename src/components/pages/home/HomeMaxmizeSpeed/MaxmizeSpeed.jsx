import React from 'react';
import { BsCheck } from 'react-icons/bs';
import maximizeimg from '../../../../assets/maximize-website-speed-1x.webp';
import bitcatcha from '../../../../assets/bitcatcha-dark-1x.webp';
import wpbeginner from '../../../../assets/wpbeginner-dark-1x.webp';
import websitePlanet from '../../../../assets/website-planet-dark-1x.webp';

function MaxmizeSpeed() {
    const recommendData = [
        {
            img: bitcatcha,
            description: 'Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!'
        },
        {
            img: wpbeginner,
            description: 'If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.'
        },
        {
            img: websitePlanet,
            description: 'The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.'
        },
    ]
    return (
        <div className=' px-24 bg-lightGray pt-20 pb-10'>
            <div className=' grid grid-cols-2 items-center'>
                <img src={maximizeimg} alt="" />
                <div className=' px-20'>
                    <h1 className=' text-4xl text-primary font-semibold mb-10'>Maximize Website Speed</h1>
                    <p className=' flex my-6'><span className=' text-xl text-green font-bold mr-2'><BsCheck /></span> Maximize performance with LiteSpeed Web Server technology.</p>
                    <p className=' flex my-6'><span className=' text-xl text-green font-bold mr-2'><BsCheck /></span> Enjoy optimized performance with advanced cache solutions.</p>
                    <p className=' flex my-6'><span className=' text-xl text-green font-bold mr-2'><BsCheck /></span> Reduce website response times up to 3 times with Object Cache for WordPress.</p>
                </div>
            </div>

            <div className=' grid grid-cols-3 justify-center items-center mt-8'>
                {recommendData.map((data, i)=> (
                    <div
                    key={i}
                    className=' w-[350px] h-[220px] bg-gray px-10 py-8 rounded-sm'>
                        <img src={data.img} alt="" className=' pb-4' />
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MaxmizeSpeed