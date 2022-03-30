import { useState, useEffect } from 'react'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import * as profileService from '../../services/profileService'
import NavBar from '../../components/NavBar/NavBar'
import AddInstrumentToProfile from '../../components/AddInstrumentToProfile/AddInstrumenttoProfile'

const MyProfile = (props) => {
  const [profile, setProfile] = useState([])

  useEffect(()=> {
    profileService.getProfile(props.user.profile)
    .then(profileData => setProfile(profileData))
  }, [])

  return (
    <>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <br />
      <br />
      <br />

      <h1>Hello. This is your Profile</h1>
      <>
        <div className='card-body'>
          <p>{profile.name}</p>
          <ProfileDetails profile={profile} />
          <AddInstrumentToProfile getAllInstruments={props.getAllInstruments} />
        </div>
      </>
    </>
  )
}

export default MyProfile