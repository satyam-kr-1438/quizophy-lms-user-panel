import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment, useState } from 'react'
import EditProfileDetail from 'components/common/profile/EditProfileDetail';
const EditProfile = () => {

  return(
    <Fragment>
        <PageProgress/>
        <TopNavigation text="Edit Profile"/>
        <EditProfileDetail/>
    </Fragment>
  )
}

export default EditProfile