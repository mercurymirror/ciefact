import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Hamburger from "./hamburger"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = ({ categories }) => {
  //state for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  })

  //state for disabled button
  const [disabled, setDisabled] = useState(false)

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      setState({ clicked: false, menuName: "Menu" })
    }

    router.events.on("routeChangeStart", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [router.events])
  const handleMenu = () => {
    disabledMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      })
    }
  }

  // determine if our menu button should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <header>
      <div className="container-burger">
        <div className="wrapper">
          <div className="inner-header">
            <div className="menu">
              <button
                disabled={disabled}
                onClick={handleMenu}
                // {...cursorHandlers}
              >
                <a className="menuBtn">
                  <GiHamburgerMenu />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} categories={categories} />
    </header>
  )
}

export default Header
