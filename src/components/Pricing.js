import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { BrowserRouter as Router,  Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'></h1>
          <div className='pricing__container'>
            <Link to="" target="_blank" className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Crowdfunder</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li>Mint campaigns</li>
                  <li>Fundraise projects</li>
                  <li>Support defilm</li>
                </ul>
                <a href="https://newfilmtech-web3-crowdfunding.vercel.app/" target="_blank">
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Fund
                </Button>
                </a>
              </div>
            </Link>
            <Link to="" target="_blank" className='pricing__container-card'> 
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Video</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li>Watch Content</li>
                  <li>Generate Tokens</li>
                  <li>Become a DAO member</li>
                </ul>
                <a href="https://newfilmtech-web3-video.netlify.app/" target="_blank">
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Stream
                </Button>
                </a>
              </div>
            </Link>
            <Link to="" target="_blank" className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Minter</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li>NFT mint portal</li>
                  <li>Staking pools</li>
                  <li>Active Rewards</li>
                </ul>
                <a href="https://newfilmtech-web3-nftminter.netlify.app/" target="_blank">
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Stake
                </Button>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;