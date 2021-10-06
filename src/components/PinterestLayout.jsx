import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div id="mi id" style={_stylesLayout.pin_container}>
      <PinCard size='small' tamaño='peque' image= 'https://i.pinimg.com/564x/da/6e/13/da6e1325c4bb57fbcef71792677649e4.jpg' />
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/33/d5/a0/33d5a07825ded8c1f8f794473d4ebdb7.jpg'/>
      <PinCard size='large' tamaño='largo' image= 'https://i.pinimg.com/236x/2b/03/cb/2b03cb6ecb1ce06bf18c31e97bde4242.jpg'/>
      <PinCard size='small'  tamaño='peque' image= 'https://i.pinimg.com/236x/c4/cb/a6/c4cba68b838f39180736aa74a6568a89.jpg'/>
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/f6/05/c4/f605c41958842ab49367e12c8403631c.jpg' />
      <PinCard size='large' tamaño='largo' image= 'https://i.pinimg.com/236x/0f/d3/e8/0fd3e8e7e5d74240dcea74b78cd0edfa.jpg'/>
      <PinCard size='small' tamaño='peque' image= 'https://i.pinimg.com/236x/54/7a/bb/547abb647e77e98f56428533ba8f93be.jpg'/>
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/a4/96/da/a496da17dc1bb9b7484e8e55af9f7031.jpg'/>
      <PinCard size='large' tamaño='largo' image= 'https://i.pinimg.com/236x/19/11/98/191198a6ff4c5450cfd45106dbbc9581.jpg'/>
      <PinCard size='small' tamaño='peque' image= 'https://i.pinimg.com/236x/9a/17/13/9a17132cef1222781a986a72f00bd905.jpg'/>
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/34/8b/19/348b191d0587dcfa5680f4e9122390f1.jpg'/>
      <PinCard size='large' tamaño='largo'  image= 'https://i.pinimg.com/236x/cf/39/39/cf393997ccc84bd5d2a981f6143ac408.jpg'/>
      <PinCard size='small' tamaño='peque' image= 'https://i.pinimg.com/236x/94/ef/56/94ef56b1570048c3efcfbcac89919694.jpg'/>
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/4b/75/70/4b757056e6e172d3ec798b6046fa2cfa.jpg'/>
      <PinCard size='large' tamaño='largo' image= 'https://i.pinimg.com/236x/93/85/2d/93852dcd5417e40c8e30b3eb244660cd.jpg' />
      <PinCard size='small' tamaño='peque' image= 'https://i.pinimg.com/236x/aa/fa/e4/aafae4c2e1b41bdb73d4d3c118349a3c.jpg'/>
      <PinCard size='medium' tamaño='medio' image= 'https://i.pinimg.com/236x/08/bf/32/08bf3263dbb2ed4936da63267563314c.jpg'/>
      <PinCard size='large' tamaño='largo'  image= 'https://i.pinimg.com/564x/86/b3/c8/86b3c82b37f274271b5a6484c0b5847e.jpg'/>

    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
};



export default PinterestLayout;
