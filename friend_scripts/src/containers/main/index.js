import React from "react";
import * as mdc from "material-components-web/dist/material-components-web";
import MyStories from "../myPage/myStories";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(route, div) {
    document.querySelectorAll('.mdc-list-item').forEach(element => {
      element.className = 'mdc-list-item';
    });
    div.className = 'mdc-list-item mdc-temporary-drawer--selected';
    alert(route);
  }

  render() {
    console.log(this.props)
    return (
      <div style={{backgroundColor: 'red'}} className={'Main'}>
        <header className={'mdc-toolbar mdc-toolbar--fixed'}>
          <div className={'mdc-toolbar__row'}>
            <section className={'mdc-toolbar__section mdc-toolbar__section--align-start'}>
              <i className={'menu material-icons'}>menu</i>
              <span className={'mdc-toolbar__title'}>Friendscripts</span>
              <span><a href='landingMain' onClick={this.props.logOutUser}>Logout</a></span>
            </section>
          </div>
        </header>
        <aside className={'mdc-temporary-drawer mdc-typography'}>
          <nav className={'mdc-temporary-drawer__drawer'}>
            <header className={'mdc-temporary-drawer__header'}>
              <div className={'mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary'}>
                Friendscripts
              </div>
            </header>
            <nav className={'mdc-temporary-drawer__content mdc-list'}>
              <div className={'mdc-list-item mdc-temporary-drawer--selected'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true">Landing_Main</i>
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true"></i>Staff
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true"></i>About
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true"></i>Menu
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true"></i>Calendar
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true"></i>Badges
              </div>
              <div className={'mdc-list-item'}>
                <i className={'material-icons mdc-list-item__start-detail'} aria-hidden="true">share</i>Messaging
              </div>
            </nav>
          </nav>
        </aside>
        <main id="Main-main" className={'mdc-toolbar-fixed-adjust'}>
        </main>
        <MyStories userID = {this.props.userID}/>
      </div>
    );
  }

	render() {
		return (
			<div className={"Main"}>
				<header className={"mdc-toolbar mdc-toolbar--fixed"}>
					<div className={"mdc-toolbar__row"}>
						<section
							className={
								"mdc-toolbar__section mdc-toolbar__section--align-start"
							}
						>
							<i className={"menu material-icons"}>menu</i>
							<span className={"mdc-toolbar__title"}>Friendscripts</span>
							<span>
								<a href="landingMain" onClick={this.props.logOutUser}>
									Logout
								</a>
							</span>
						</section>
					</div>
				</header>
				<aside className={"mdc-temporary-drawer mdc-typography"}>
					<nav className={"mdc-temporary-drawer__drawer"}>
						<header className={"mdc-temporary-drawer__header"}>
							<div
								className={
									"mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary"
								}
							>
								Friendscripts
							</div>
						</header>
						<nav className={"mdc-temporary-drawer__content mdc-list"}>
							<div
								className={"mdc-list-item mdc-temporary-drawer--selected"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("landingMain", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									Landing_Main
								</i>
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("staff", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									people_outline
								</i>Staff
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("about", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									business
								</i>About
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("menu", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									view_quilt
								</i>Menu
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("calendar", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									event
								</i>Calendar
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("badges", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									local_play
								</i>Badges
							</div>
							<div
								className={"mdc-list-item"}
								ref={div => {
									div.addEventListener("click", () => {
										this.linkClicked("messaging", div);
									});
								}}
							>
								<i
									className={"material-icons mdc-list-item__start-detail"}
									aria-hidden="true"
								>
									share
								</i>Messaging
							</div>
						</nav>
					</nav>
				</aside>
				<main id="Main-main" className={"mdc-toolbar-fixed-adjust"} />
				<MyStories />
			</div>
		);
	}

	componentDidMount() {
		mdc.autoInit();

		this.drawer = new mdc.drawer.MDCTemporaryDrawer(
			document.querySelector(".mdc-temporary-drawer")
		);
		document
			.querySelector(".menu")
			.addEventListener("click", () => (this.drawer.open = true));
	}
}

export default Main;
