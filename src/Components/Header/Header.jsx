
function Header() {

    return (
        <>
        <header className="globalNav noDropdownTransition">
        <div className="container-lg">
          <ul className="navRoot">
            <li className="navSection logo">
              <a className="rootLink item-home colorize" href="https://mozakrty.com/">ذاكر</a>
            </li>
            <li className="navSection primary">
              <a className="rootLink item-company hasDropdown colorize" data-dropdown="company">
                حولنا
              </a>
              <a className="rootLink item-products hasDropdown colorize" data-dropdown="products">
                الصفوف الدراسية
              </a>
              <a className="rootLink item-developers hasDropdown colorize" data-dropdown="developers">
                الرئيسية
              </a>
            </li>
            <li className="navSection secondary">
              <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two" href="#" id="search_pc" onclick>
                البحث
              </a>
            </li>
            <li className="navSection mobile">
              <a className="rootLink item-mobileMenu colorize"><h2>Menu</h2></a>
              <div className="popup">
                <div className="popupContainer">
                  <a className="popupCloseButton">Close</a>
                  <div className="mobileProducts">
                    <h4 style={{position: 'fixed', left: 0}}>الصفوف الثانوية</h4>
                    <div className="mobileProductsList">
                      <ul>
                        <li><a className="linkContainer item-relay" href="https://mozakrty.com/firstSecondary/">
                            <svg viewBox="0 0 48 48"><path fill="#FFA27B" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#C23D4B" className="hover-fillDark" d="M24 12.5c8.285 0 15 6.828 15 15.25S32.285 43 24 43c-8.284 0-15-6.828-15-15.25S15.716 12.5 24 12.5z" /><path fill="#FFF" d="M25 38.925v6.288a.787.787 0 0 1-.788.787h-.424a.787.787 0 0 1-.788-.788v-6.287c-3.668-.49-6.5-3.623-6.5-7.425a7.5 7.5 0 0 1 15 0c0 3.802-2.832 6.935-6.5 7.425z" /></svg>الأول الثانوي
                          </a></li>
                        <li><a className="linkContainer item-atlas" href="https://mozakrty.com/secondSecondary/">
                            <svg viewBox="0 0 48 48"><path fill="#FCD669" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#CE7C3A" className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" /><path fill="#FFF" d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" /></svg>الثاني الثانوي
                          </a></li>
                        <li><a className="linkContainer item-radar" href="https://mozakrty.com/thirdSecondary/">
                            <svg viewBox="0 0 48 48"><path className="hover-fillLight" fill="#F6A4EB" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" /><path fill="#FFF" d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" /><path className="hover-fillDark" fill="#9251AC" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" /></svg>الثالث الثانوي
                            <span className="new-badge">جديد</span>
                          </a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobileSecondaryNav">
                    <ul>
                      <li>
                        <a className="item-pricing" href="https://mozakrty.com/about" data-analytics-action="pricing" data-action-source="mobile-nav">
                          حولنا
                        </a>
                      </li>
                      <li><a className="item-workswith" href="https://mozakrty.com/privacy">سياسة الخصوصية وحقوق الملكية</a></li>
                    </ul></div>
                  <a className="mobileSignIn" data-adroll-segment="submit_two" href="https://dashboard.stripe.com/login" id="search_mobile">البحث</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="dropdownRoot">
          <div className="dropdownBackground" style={{transform: 'translateX(452px) scaleX(0.707692) scaleY(1.1075)'}}>
            <div className="alternateBackground" style={{transform: 'translateY(255.53px)'}} />
          </div>
          <div className="dropdownArrow" style={{transform: 'translateX(636px) rotate(45deg)'}} />
          <div className="dropdownContainer" style={{transform: 'translateX(452px)', width: '368px', height: '443px'}}>
            <div className="dropdownSection left" data-dropdown="products">
              <div className="dropdownContent">
                <div className="linkGroup">
                  <ul className="productsGroup">
                    <li><a className="linkContainer item-relay" href="https://stripe.com/relay">
                        <svg viewBox="0 0 48 48"><path fill="#FFA27B" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#C23D4B" className="hover-fillDark" d="M24 12.5c8.285 0 15 6.828 15 15.25S32.285 43 24 43c-8.284 0-15-6.828-15-15.25S15.716 12.5 24 12.5z" /><path fill="#FFF" d="M25 38.925v6.288a.787.787 0 0 1-.788.787h-.424a.787.787 0 0 1-.788-.788v-6.287c-3.668-.49-6.5-3.623-6.5-7.425a7.5 7.5 0 0 1 15 0c0 3.802-2.832 6.935-6.5 7.425z" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">الأول الثانوي</h3>
                          {/* <p class="linkSub">جميع المواد وكافة الملخصات</p> */}
                        </div>
                      </a></li>
                    <li><a className="linkContainer item-atlas" href="https://stripe.com/atlas">
                        <svg viewBox="0 0 48 48"><path fill="#FCD669" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#CE7C3A" className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" /><path fill="#FFF" d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">الثاني الثانوي</h3>
                          {/* <p class="linkSub">جميع المواد وكافة الملخصات</p> */}
                        </div>
                      </a></li>
                    <li><a className="linkContainer item-radar" href="https://stripe.com/radar">
                        <svg viewBox="0 0 48 48"><path className="hover-fillLight" fill="#F6A4EB" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" /><path fill="#FFF" d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" /><path className="hover-fillDark" fill="#9251AC" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">الثالث الثانوي<span className="new-badge">جديد</span></h3>
                          <p className="linkSub">الأكثر تركيزا الأن</p>
                        </div>
                      </a></li>
                  </ul>
                </div>
                <ul className="linkGroup linkList prodsubGroup">
                  <li><a className="linkContainer item-workswith" href="#">
                      <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path className="hover-fillLight" fill="#87BBFD" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.018 1.018 0 0 1-.86 0l-6.473-2.992a1.03 1.03 0 0 1-.594-.908V4.51c.006-.2.07-.39.18-.55L8.5 7.338l7.32-3.38c.108.16.172.35.178.55v7.984z" /><path className="hover-fillDark" fill="#6772E5" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.026 1.026 0 0 1-.43.095V7.34l7.32-3.38c.11.16.173.35.18.55v7.984z" /><path className="hover-fillLight" fill="#87BBFD" d="M8.5 5C6.567 5 5 4.228 5 3.275v-1.15h.098c.36.768 1.742 1.34 3.402 1.34 1.66.002 3.043-.572 3.402-1.34H12v1.15C12 4.228 10.433 5 8.5 5z" /></svg>قريبا باقي الصفوف الدراسية</h3>
                    </a></li>
                </ul>
              </div>
            </div>
            <div className="dropdownSection active" data-dropdown="developers">
              <div className="dropdownContent">
                <div className="linkGroup documentationGroup">
                  <a className="linkContainer withIcon item-documentation" href="/">
                    <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#87BBFD" className="hover-fillLight" d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z" /><path fill="#6772E5" className="hover-fillDark" d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z" /></svg>الصفحة الرئيسية</h3>
                    <span className="linkSub">اكتساب العلم و المهارات!</span>
                  </a>
                </div>
                <ul className="linkGroup linkList developersGroup">
                  <li><a className="linkContainer item-apiReference" href="#">
                      <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" className="hover-strokeDark" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>تذكير</h3>
                    </a></li>
                </ul>
              </div>
            </div>
            <div className="dropdownSection right" data-dropdown="company">
              <div className="dropdownContent">
                <ul className="linkGroup linkList companyGroup">
                  <li><a className="linkContainer item-about" href="https://stripe.com/about">
                      <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#6772E5" className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z" /></svg>معلومات حولنا</h3>
                    </a></li>
                </ul>
                <div className="linkGroup blogGroup">
                  <ul className="blogPosts">
                    <li><a href="https://mozakrty.com/privacy">
                        <span className="title ">سياسات الخصوصية</span>
                      </a></li>
                    <li><a href="https://mozakrty.com/copyright">
                        <span className="title ">حقوق الملكية</span>
                      </a></li>
                    <li><a href="/blog/works-with-stripe">
                        <span className="title ">بيانات اخرى</span>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        </>
    );
}

export default Header();