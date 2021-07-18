import {PrimaryButton} from '@fluentui/react'
import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logoutUserAction} from '../../actions/UserActions'


const Nav: React.FC = (props: any) => {

    const {user} = props
    console.log(props)

    const handleLogout = () => {
        props.dispatch(logoutUserAction())
    }

    return (
        <nav className="mt-2">
            {user &&
            <PrimaryButton color="danger" className="btn-sm float-right" onClick={handleLogout}>Logout</PrimaryButton>}

            {
                !user && (
                    <>
                        <NavLink to="/register" className="btn btn-link btn-sm float-right"
                                 activeClassName="btn btn-primary text-white">
                            Register
                        </NavLink>

                        <NavLink to="/login" className="btn btn-link btn-sm float-right"
                                 activeClassName="btn btn-primary text-white">
                            Login
                        </NavLink>
                    </>
                )
            }
        </nav>
    )
}


function mapStateToProps(state: any) {
    return {
        user: state.user
    }
}


// const mapStateToProps = ({ user }:UserType) => ({ user })

export default connect(mapStateToProps)(Nav)