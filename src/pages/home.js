import React from 'react';

class Home extends React.Component {
    render() {
    return (
        <div>
            <div className="container-fluid">
        <div id="layout-wrapper">

            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="container-fluid">
                        <div className="float-end">

                            <div className="dropdown d-inline-block d-lg-none ms-2">
                                <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-search-dropdown">

                                    <form className="p-3">
                                        <div className="m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..."
                                                    aria-label="Recipient's username"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit"><i
                                                            className="mdi mdi-magnify"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown d-none d-sm-inline-block">
                                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img className="" src="assets/images/flags/spain.jpg" alt="Header Language" height="16"/>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">


                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="../assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/> <span
                                            className="align-middle">Español</span>
                                    </a>


                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/> <span
                                            className="align-middle">Aleman</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"/> <span
                                            className="align-middle">Italiano</span>
                                    </a>


                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"/> <span
                                            className="align-middle">Ingles</span>
                                    </a>
                                </div>
                            </div>

                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                    <i className="mdi mdi-fullscreen"></i>
                                </button>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="mdi mdi-bell-outline"></i>
                                    <span className="badge rounded-pill bg-danger ">3</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-notifications-dropdown">
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0"> Notificaciones </h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="small"> Ver Todas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar style={{maxHeight: "230px;"}}>
                                        <a href="/" className="text-reset notification-item">
                                            <div className="d-flex align-items-start">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                        <i className='bx bx-error'></i>
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1">Calibracion equipo vencida</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">La calibracion anual vencio el dia 20/08/2022</p>
                                                        <p className="mb-0"><i className="mdi-access-point"></i> TAG: Entrada ecopetrol 1 puerto salgar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/" className="text-reset notification-item">
                                            <div className="d-flex align-items-start">
                                                <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs"
                                                    alt="user-pic"/>
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1">Operario Puerto Salgar</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">Informe de cargue dia 22/08/2022</p>
                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/" className="text-reset notification-item">
                                            <div className="d-flex align-items-start">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                                        <i className="bx bx-badge-check"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1">Tu equipo esta en linea</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">Equipo en linea sin alarmas</p>
                                                        <p className="mb-0"><i className="mdi mdi-access-point"></i>TAG: Entrada ecopetrol Cartagena 1</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="p-2 border-top d-grid">
                                        <a className="btn btn-sm btn-link font-size-14 " href="javascript:void(0)">
                                            <i className="mdi mdi-arrow-right-circle me-1"></i> Ver mas..
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-2.jpg"
                                        alt="Header Avatar"/>
                                    <span className="d-none d-xl-inline-block ms-1">Kevin Duran</span>
                                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    {/* item*/}
                                    <a className="dropdown-item" href="/"><i className="bx bx-user font-size-16 align-middle me-1"></i>
                                        Perfil</a>
                                    <a className="dropdown-item" href="/"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> Equipos</a>
                                    <a className="dropdown-item d-block" href="/"><span className="badge bg-success float-end">11</span><i
                                            className="bx bx-wrench font-size-16 align-middle me-1"></i> Configuracion</a>
                                    <a className="dropdown-item" href="/"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i>
                                        Permisos</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-danger" href="/"><i
                                            className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> Cerrar Sesion</a>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                    <i className="mdi mdi-settings-outline"></i>
                                </button>
                            </div>

                        </div>
                        <div>
                            {/* LOGO */}
                            <div className="navbar-brand-box">
                                <a href="index.html" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src="../assets/images/logo-sm.png" alt="" height="20"/>
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-dark.png" alt="" height="17"/>
                                    </span>
                                </a>

                                <a href="index.html" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height="20"/>
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-light.png" alt="" height="19"/>
                                    </span>
                                </a>
                            </div>

                            <button type="button" className="btn btn-sm px-3 font-size-16 header-item toggle-btn waves-effect"
                                id="vertical-menu-btn">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>

                            {/* App Search*/}
                            <form className="app-search d-none d-lg-inline-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Buscar..."/>
                                    <span className="bx bx-search-alt"></span>
                                </div>
                            </form>

                            <div className="dropdown dropdown-mega d-none d-lg-inline-block ms-2">
                                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown"
                                    aria-haspopup="false" aria-expanded="false">
                                    Mega Menu
                                    <i className="mdi mdi-chevron-down"></i>
                                </button>
                                <div className="dropdown-menu dropdown-megamenu">
                                    <div className="row">
                                        <div className="col-sm-6">

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <h5 className="font-size-14 mt-0">UI Components</h5>
                                                    <ul className="list-unstyled megamenu-list text-muted">
                                                        <li>
                                                            <a href="javascript:void(0);">Lightbox</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Range Slider</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Sweet Alert</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Rating</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Forms</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Tables</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Charts</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">
                                                    <h5 className="font-size-14 mt-0">Applications</h5>
                                                    <ul className="list-unstyled megamenu-list">
                                                        <li>
                                                            <a href="javascript:void(0);">Ecommerce</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Calendar</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Email</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Projects</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Tasks</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Contacts</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">
                                                    <h5 className="font-size-14 mt-0">Extra Pages</h5>
                                                    <ul className="list-unstyled megamenu-list">
                                                        <li>
                                                            <a href="javascript:void(0);">Light Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Compact Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Horizontal layout</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Maintenance</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Coming Soon</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">Timeline</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">FAQs</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h5 className="font-size-14 mt-0">Components</h5>
                                                    <div className="px-lg-2">
                                                        <div className="row g-0">
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/github.png" alt="Github"/>
                                                                    <span>GitHub</span>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                                    <span>Bitbucket</span>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                                    <span>Dribbble</span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="row g-0">
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                                    <span>Dropbox</span>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                                                    <span>Mail Chimp</span>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <a className="dropdown-icon-item" href="/">
                                                                    <img src="assets/images/brands/slack.png" alt="slack"/>
                                                                    <span>Slack</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <div>
                                                        <div className="card text-white mb-0 overflow-hidden text-white-50"
                                                            style={{backgroundImage: "url('assets/images/megamenu-img.png');background-size: cover;"}}>
                                                            <div className="card-img-overlay"></div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-xl-6">
                                                                        <h4 className="text-white mb-3">Sale</h4>

                                                                        <h5 className="text-white-50">Up to <span
                                                                                className="font-size-24 text-white">50 %</span> Off</h5>
                                                                        <p>At vero eos accusamus et iusto odio.</p>
                                                                        <div className="mb-4">
                                                                            <a href="/" className="btn btn-success btn-sm">View more</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </header>
        {/* ========== Left Sidebar Start ========== */}
<div className="vertical-menu">

    <div className="h-100">

        <div className="user-wid text-center py-4">
            <div className="user-img">
                <img src="assets/images/users/avatar-2.jpg" alt="" className="avatar-md mx-auto rounded-circle"/>
            </div>

            <div className="mt-3">

                <a href="/" className="text-dark fw-medium font-size-16">Kevin Duran</a>
                <p className="text-body mt-1 mb-0 font-size-13">Jefe de metrologia</p>

            </div>
        </div>

        {/*- Sidemenu */}
        <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>

                <li>
                    <a href="javascript: void(0);" className="waves-effect">
                        <i className="mdi mdi-airplay"></i><span className="badge rounded-pill bg-info float-end">2</span>
                        <span>Dashboard</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="index.html">Dashboard</a></li>
                    </ul>
                </li>



                <li>
                    <a href="calendar.html" className=" waves-effect">
                        <i className="mdi mdi-calendar-text"></i>
                        <span>Calendario</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-inbox-full"></i>
                        <span>Equipos</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="email-inbox.html">Todos los equipos</a></li>
                        <li><a href="email-read.html">Por Sitio</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-calendar-check"></i>
                        <span>Informes</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="tasks-kanban.html">Todos los informes</a></li>
                        <li><a href="tasks-create.html">Por Sitio</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-account-circle-outline"></i>
                        <span>Usuarios</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="pages-login.html">Todos los usuarios</a></li>
                        <li><a href="pages-register.html">Crear Usuario</a></li>
                        <li><a href="pages-recoverpw.html">Permisos</a></li>
                    </ul>
                </li>

                <li className="menu-title">Componentes</li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                        <span>Crear Equipo</span>
                    </a>

                </li>

                <li>
                    <a href="javascript: void(0);" className="waves-effect">
                        <i className="mdi mdi-newspaper"></i>
                        <span className="badge rounded-pill bg-danger float-end">6</span>
                        <span>Notificaciones</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-clipboard-list-outline"></i>
                        <span>Informes</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="tables-basic.html">Equipos</a></li>
                        <li><a href="tables-datatable.html">Cargues</a></li>
                        <li><a href="tables-responsive.html">Descargues</a></li>
                        <li><a href="tables-editable.html">Carro Tanques</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" className="has-arrow waves-effect">
                        <i className="mdi mdi-chart-donut"></i>
                        <span>Estadisticas</span>
                    </a>
                    <ul className="sub-menu" ariaExpanded="false">
                        <li><a href="charts-apex.html">Tecnicas</a></li>
                        <li><a href="charts-chartjs.html">Comerciales</a></li>
                    </ul>
                </li>

            </ul>
        </div>
        {/* Sidebar */}
    </div>
</div>
{/* Left Sidebar End */}

            {/* ============================================================== */}
            {/* Start right Content here */}
            {/* ============================================================== */}
            <div className="main-content">

                <div className="page-content">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item active">Welcome to Qovex Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-start">
                                        <div className="avatar-sm font-size-20 me-3">
                                            <span className="avatar-title bg-soft-primary text-primary rounded">
                                                <i className="mdi mdi-gauge"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-size-16 mt-2">Total Masa</div>
                                        </div>
                                    </div>
                                    <h4 className="mt-4">620.000 kg</h4>
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                                                        className="mdi mdi-arrow-up"></i> </span></p>
                                        </div>
                                        <div className="col-5 align-self-center">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "62%"}}
                                                    aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-start">
                                        <div className="avatar-sm font-size-20 me-3">
                                            <span className="avatar-title bg-soft-primary text-primary rounded">
                                                <i className="mdi mdi-account-multiple-outline"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-size-16 mt-2">Sitio con mas movimiento</div>

                                        </div>
                                    </div>
                                    <h4 className="mt-4">245.000 kg</h4>
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="mb-0"><span className="text-success me-2"> ´Planta Cartagena  </span></p>
                                        </div>
                                        <div className="col-5 align-self-center">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: "62%"}}
                                                    aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Movimiento</h4>

                                    <div id="line-chart" className="apex-charts"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Revenue</h4>

                                    <div id="column-chart" className="apex-charts"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}

                    <div className="row">
                        <div className="col-xl-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Sales Analytics</h4>

                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <div id="donut-chart" className="apex-charts"></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="py-3">
                                                            <p className="mb-1 text-truncate"><i
                                                                    className="mdi mdi-circle text-primary me-1"></i> Online
                                                            </p>
                                                            <h5>$ 2,652</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="py-3">
                                                            <p className="mb-1 text-truncate"><i
                                                                    className="mdi mdi-circle text-success me-1"></i>
                                                                Offline</p>
                                                            <h5>$ 2,284</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="py-3">
                                                            <p className="mb-1 text-truncate"><i
                                                                    className="mdi mdi-circle text-warning me-1"></i>
                                                                Marketing</p>
                                                            <h5>$ 1,753</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Monthly Sales</h4>

                                    <div id="scatter-chart" className="apex-charts"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <div className="text-white-50">
                                        <h5 className="text-white">2400 + New Users</h5>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                        <div>
                                            <a href="/" className="btn btn-outline-success btn-sm">View more</a>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end">
                                        <div className="col-8">
                                            <div className="mt-4">
                                                <img src="assets/images/widget-img.png" alt=""
                                                    className="img-fluid mx-auto d-block"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}

                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Overview</h4>

                                    <div>
                                        <div className="pb-3 border-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <p className="mb-2">New Visitors</p>
                                                    <h4 className="mb-0">3,524</h4>
                                                </div>
                                                <div className="col-4">
                                                    <div className="text-end">
                                                        <div>
                                                            2.06 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                        </div>
                                                        <div className="progress progress-sm mt-3">
                                                            <div className="progress-bar" role="progressbar" style={{width: "62%"}}
                                                                aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-3 border-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <p className="mb-2">Product Views</p>
                                                    <h4 className="mb-0">2,465</h4>
                                                </div>
                                                <div className="col-4">
                                                    <div className="text-end">
                                                        <div>
                                                            0.37 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                        </div>
                                                        <div className="progress progress-sm mt-3">
                                                            <div className="progress-bar bg-warning" role="progressbar"
                                                                style={{width: "48%"}} aria-valuenow="48" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <p className="mb-2">Revenue</p>
                                                    <h4 className="mb-0">$ 4,653</h4>
                                                </div>
                                                <div className="col-4">
                                                    <div className="text-end">
                                                        <div>
                                                            2.18 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                        </div>
                                                        <div className="progress progress-sm mt-3">
                                                            <div className="progress-bar bg-success" role="progressbar"
                                                                style={{width: "78%"}} aria-valuenow="78" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Reviews</h4>
                                    <div className="mb-4">
                                        <h5><span className="text-primary">500</span>+ Satisfied clients</h5>
                                    </div>
                                    <div className="mb-3">
                                        <i className="fas fa-quote-left h4 text-primary"></i>
                                    </div>
                                    <div id="reviewExampleControls" className="carousel slide review-carousel"
                                        data-ride="carousel">

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div>
                                                    <p>To achieve this, it would be necessary to have uniform grammar,
                                                        pronunciation and more common words</p>
                                                    <div className="d-flex align-items-start mt-4">
                                                        <div className="avatar-sm me-3">
                                                            <span
                                                                className="avatar-title bg-soft-primary text-primary rounded-circle">
                                                                J
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h5 className="font-size-16 mb-1">Jessie Mitchell</h5>
                                                            <p className="mb-2">CEO of ABC Company</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div>
                                                    <p>For science, music, sport, etc, Europe uses the same vocabulary
                                                        languages only differ in their grammar</p>
                                                    <div className="d-flex align-items-start mt-4">
                                                        <div className="avatar-sm me-3">
                                                            <img src="assets/images/users/avatar-4.jpg" alt=""
                                                                className="img-fluid rounded-circle"/>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h5 className="font-size-16 mb-1">Kelly Rivera</h5>
                                                            <p className="mb-2">Web Developer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div>
                                                    <p>The new common language will be more simple and regular than the
                                                        existing European languages.</p>
                                                    <div className="d-flex align-items-start mt-4">
                                                        <div className="avatar-sm me-3">
                                                            <span
                                                                className="avatar-title bg-soft-primary text-primary rounded-circle">
                                                                S
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h5 className="font-size-16 mb-1">Simon Hawkins</h5>
                                                            <p className="mb-2">CEO of XYZ Company</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a className="carousel-control-prev" href="#reviewExampleControls" role="button"
                                            data-bs-slide="prev">
                                            <i className="mdi mdi-chevron-left carousel-control-icon"></i>
                                        </a>
                                        <a className="carousel-control-next" href="#reviewExampleControls" role="button"
                                            data-bs-slide="next">
                                            <i className="mdi mdi-chevron-right carousel-control-icon"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Revenue by location</h4>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div id="usa-vectormap" style={{height: "230px"}} ></div>
                                        </div>

                                        <div className="col-sm-5 ms-auto">
                                            <div className="mt-4 mt-sm-0">
                                                <p>Last month Revenue</p>

                                                <div className="d-flex align-items-start py-3">
                                                    <div className="flex-1">
                                                        <p className="mb-2">California</p>
                                                        <h5 className="mb-0">$ 2,256</h5>
                                                    </div>
                                                    <div className="ms-auto">
                                                        2.52 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start py-3 border-top">
                                                    <div className="flex-1">
                                                        <p className="mb-2">Nevada</p>
                                                        <h5 className="mb-0">$ 1,853</h5>
                                                    </div>
                                                    <div className="ms-auto">
                                                        1.26 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Inbox</h4>

                                    <ul className="inbox-wid list-unstyled">
                                        <li className="inbox-list-item">
                                            <a href="/">
                                                <div className="d-flex align-items-start">
                                                    <div className="me-3 align-self-center">
                                                        <img src="assets/images/users/avatar-3.jpg" alt=""
                                                            className="avatar-sm rounded-circle"/>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className="font-size-16 mb-1">Paul</h5>
                                                        <p className="text-truncate mb-0">Hey! there I'm available</p>
                                                    </div>
                                                    <div className="font-size-12 ms-auto">
                                                        05 min
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="inbox-list-item">
                                            <a href="/">
                                                <div className="d-flex align-items-start">
                                                    <div className="me-3 align-self-center">
                                                        <img src="assets/images/users/avatar-4.jpg" alt=""
                                                            className="avatar-sm rounded-circle"/>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className="font-size-16 mb-1">Mary</h5>
                                                        <p className="text-truncate mb-0">This theme is awesome!</p>
                                                    </div>
                                                    <div className="font-size-12 ms-auto">
                                                        12 min
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="inbox-list-item">
                                            <a href="/">
                                                <div className="d-flex align-items-start">
                                                    <div className="me-3 align-self-center">
                                                        <img src="assets/images/users/avatar-5.jpg" alt=""
                                                            className="avatar-sm rounded-circle"/>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className="font-size-16 mb-1">Cynthia</h5>
                                                        <p className="text-truncate mb-0">Nice to meet you</p>
                                                    </div>
                                                    <div className="font-size-12 ms-auto">
                                                        18 min
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="inbox-list-item">
                                            <a href="/">
                                                <div className="d-flex align-items-start">
                                                    <div className="me-3 align-self-center">
                                                        <img src="assets/images/users/avatar-6.jpg" alt=""
                                                            className="avatar-sm rounded-circle"/>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h5 className="font-size-16 mb-1">Darren</h5>
                                                        <p className="text-truncate mb-0">I've finished it! See you so</p>
                                                    </div>
                                                    <div className="font-size-12 ms-auto">
                                                        2hr ago
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="text-center">
                                        <a href="/" className="btn btn-primary btn-sm">Load more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Latest Transactions</h4>

                                    <div className="table-responsive">
                                        <table className="table table-centered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Id no.</th>
                                                    <th scope="col">Billing Name</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col" colspan="2">Payment Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>15/01/2020</td>
                                                    <td>
                                                        <a href="/" className="text-body fw-medium">#SK1235</a>
                                                    </td>
                                                    <td>Werner Berlin</td>
                                                    <td>$ 125</td>
                                                    <td><span className="badge badge-soft-success font-size-12">Paid</span>
                                                    </td>
                                                    <td><a href="/" className="btn btn-primary btn-sm">View</a></td>
                                                </tr>
                                                <tr>
                                                    <td>16/01/2020</td>
                                                    <td>
                                                        <a href="/" className="text-body fw-medium">#SK1236</a>
                                                    </td>
                                                    <td>Robert Jordan</td>
                                                    <td>$ 118</td>
                                                    <td><span className="badge badge-soft-danger font-size-12">Chargeback</span>
                                                    </td>
                                                    <td><a href="/" className="btn btn-primary btn-sm">View</a></td>
                                                </tr>
                                                <tr>
                                                    <td>17/01/2020</td>
                                                    <td>
                                                        <a href="/" className="text-body fw-medium">#SK1237</a>
                                                    </td>
                                                    <td>Daniel Finch</td>
                                                    <td>$ 115</td>
                                                    <td><span className="badge badge-soft-success font-size-12">Paid</span>
                                                    </td>
                                                    <td><a href="/" className="btn btn-primary btn-sm">View</a></td>
                                                </tr>
                                                <tr>
                                                    <td>18/01/2020</td>
                                                    <td>
                                                        <a href="/" className="text-body fw-medium">#SK1238</a>
                                                    </td>
                                                    <td>James Hawkins</td>
                                                    <td>$ 121</td>
                                                    <td><span className="badge badge-soft-warning font-size-12">Refund</span>
                                                    </td>
                                                    <td><a href="/" className="btn btn-primary btn-sm">View</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-3">
                                        <ul className="pagination pagination-rounded justify-content-center mb-0">
                                            <li className="page-item">
                                                <a className="page-link" href="/">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                                            <li className="page-item active"><a className="page-link" href="/">2</a></li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item"><a className="page-link" href="/">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* End Page-content */}

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © Qovex.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end d-none d-sm-block">
                                    Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* end main content*/}

        </div>
        {/* END layout-wrapper */}

    </div>
    {/* end container-fluid */}

    {/* Right Sidebar */}
    <div className="right-bar">
        <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
                <a href="javascript:void(0);" className="right-bar-toggle float-end">
                    <i className="mdi mdi-close noti-icon"></i>
                </a>
                <h5 className="m-0">Settings</h5>
            </div>


            <hr classNameName="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>

            <div className="p-4">
                <div className="mb-2">
                    <img src="assets/images/layouts/layout-1.jpg" className="img-fluid img-thumbnail" alt=""/>
                </div>

                <div className="form-check form-switch mb-3">
                    <input type="checkbox" className="form-check-input theme-choice" id="light-mode-switch" checked />
                    <label className="form-check-label" for="light-mode-switch">Light Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-2.jpg" className="img-fluid img-thumbnail" alt=""/>
                </div>

                <div className="form-check form-switch mb-3">
                    <input type="checkbox" className="form-check-input theme-choice" id="dark-mode-switch"
                        data-bsStyle="assets/css/bootstrap-dark.min.css" data-appStyle="assets/css/app-dark.min.css" />
                    <label className="form-check-label" for="dark-mode-switch">Dark Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-3.jpg" className="img-fluid img-thumbnail" alt=""/>
                </div>
                <div className="form-check form-switch mb-5">
                    <input type="checkbox" className="form-check-input theme-choice" id="rtl-mode-switch"
                        data-appStyle="assets/css/app-rtl.min.css" />
                    <label className="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                </div>

            </div>

        </div>

    </div>

    <div className="rightbar-overlay"></div>
    
<script src="/folder/public/assets/libs/jquery/jquery.min.js"></script>
<script src="/folder/public/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/folder/public/assets/libs/metismenu/metisMenu.min.js"></script>
<script src="/folder/public/assets/libs/simplebar/simplebar.min.js"></script>
<script src="/folder/public/assets/libs/node-waves/waves.min.js"></script>
<script src="/folder/public/assets/libs/jquery-sparkline/jquery.sparkline.min.js"></script>

{/* apexcharts */}
<script src="/folder/public/assets/libs/apexcharts/apexcharts.min.js"></script>

{/* jquery.vectormap map */}
<script src="/folder/public/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="/folder/public/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js"></script>

<script src="/folder/public/assets/js/pages/dashboard.init.js"></script>

<script src="/folder/public/assets/js/app.js"></script>
        </div>
    ) ;
    }
}

export default Home;