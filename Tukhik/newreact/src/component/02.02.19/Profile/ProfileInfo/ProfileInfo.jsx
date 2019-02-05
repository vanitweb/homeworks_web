import React from 'react';
import  s from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return  (<div>
       <div>
        <img src='https://www.voprosy-kak-i-pochemu.ru/wp-content/uploads/more.jpg'/>
       </div>
       <div className={s.discriptionBlock}>
        ava + discription
       </div>

      
    </div>
    )
}
export default ProfileInfo