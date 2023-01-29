import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-1"> <span class="text-danger">Ojej!</span> Strona nie istnieje.</p>
                <p class="lead">
                    Nie możemy znaleźć strony, której szukasz.
                  </p>
                <NavLink to="/"><button class="btn btn-primary">Wróć do strony głównej</button></NavLink>
            </div>
        </div>
  )
}

export default NotFound