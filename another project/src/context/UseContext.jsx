import React from 'react'

const UserContext = React.createContext()

export default UserContext;  //user context is a provider

<UserContext>
    <Login/>
    <Card> 
        <Data/>
    </Card>
</UserContext>