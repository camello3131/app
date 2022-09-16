import React from 'react'
import  '../styles/login.css';



const Login = () => {
    let y = new Date().getFullYear();

    return (
            <div>
                <div className="home-btn d-none d-sm-block">
                <a href="index.html" className="text-dark"><i className="fas fa-home h2 icon-home"></i></a>
            </div>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-login text-center">
                                    <div className="bg-login-overlay"></div>
                                    <div className="position-relative">
                                        <h5 className="text-white font-size-20">Bienvenido!</h5>
                                        <p className="text-white-50 mb-0">Inicia sesión para continuar en Metro soft</p>
                                        <a href="index.html" className="logo logo-admin mt-4">
                                            <img src="assets/images/logo-sm-dark.png" alt="" height="30"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body pt-5">
                                    <div className="p-2">
                                        <form className="form-horizontal" action="index.html">

                                            <div className="mb-3">
                                                <label className="form-label" for="username">Usuario</label>
                                                <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario"/>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" for="userpassword">Contraseña</label>
                                                <input type="password" className="form-control" id="userpassword"
                                                placeholder="Ingresa tu contraseña"/>
                                            </div>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="customControlInline"/>
                                                <label className="form-check-label" for="customControlInline">Recuerdame</label>
                                            </div>

                                            <div className="mt-3">
                                                <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Iniciar Sesión</button>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <a href="pages-recoverpw.html" className="text-muted"><i
                                                        className="mdi mdi-lock me-1"></i> Olvidaste tu contraseña?</a>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <p>©
                                    {y} Metro soft. Todos los derechos reservados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login