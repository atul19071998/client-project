import React from "react";
import "../Componentcss/Biography.css";
const Biography = () => {
  return (
    <div className="bio-wrapper">
      <div className="bio-wrap">
        <div className="bio-left">
          <div className="biograph-top"></div>
          <div className="biograph-middle">
            <img
              src="https://echooling-react.vercel.app/static/media/1.2a0abe87f67e82266757.jpg"
              alt=".."
            />
          </div>
          <div className="biograph-bottom">
            <button className="followbtn">
              {" "}
              <p>
                Follow <i class="fa-solid fa-plus"></i>{" "}
              </p>
            </button>
          </div>
        </div>
        <div className="bio-right">
          <div className="bioright-one"></div>
          <div className="bioright-second">
            <div className="bio-right-1">
              <p className="bio-header">Name:</p>
              <p className="bio-headers">Douglas</p>
              <p className="bio-headers">Lyphe</p>
            </div>
            <div className="bio-right-2">
              <p className="bio-header">Job</p>
              <p className="bio-header">Title:</p>
              <p className="bio-headers">Principal</p>
            </div>
            <div className="bio-right-3">
              <p className="bio-header"> Phone:</p>
              <p className="bio-headers">+(088) 223</p>
              <p className="bio-headers"> 478 365</p>
            </div>
            <div className="bio-right-4">
              <p className="bio-heading">Email:</p>
              <p className="bio-headers">douglas@echooling.com</p>
            </div>
            <div className="bio-right-5">
              <p className="bio-heading">Follow:</p>
              <p ClassName="bio-icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </p>
            </div>
          </div>
          <div className="bioright-third">
            <h6>Biography</h6>
            <p className="right-head">
              Why I say old chap that is spiffing he legged easy peasy.
            </p>
            <p className="right-heading">
              Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor
              blimey guvnor in my flat, up the duff
            </p>
            <p className="right-heads">
              {" "}
              Eaton car boot up the kyver pardon you A bit of how's your father
              David skive off sloshed, don't get shirty with
            </p>
            <p className="right-heads">
              {" "}
              me chip shop vagabond crikey bugger Queen's English chap. Matie
              boy nancy boy bite your arm off up the
            </p>
            <p className="right-heads">
              {" "}
              kyver old no biggie fantastic boot, David have it show off show
              off pick your nose and blow off lost the plot{" "}
            </p>
            <p className="right-heads">
              {" "}
              porkies bits and bobs only a quid bugger all mate.{" "}
            </p>
          </div>
          <div className="bioright-four">
            <div className="rating-1">
              <div className="rating-left">
                <img
                  src="data:image/png;base64,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"
                  alt="..."
                />
              </div>
              <div className="rating-right">
                <div className="rating-top"> 28k</div>
                <div className="rating-bottom">
                  <p>Foreign</p>
                  <p>followers</p>
                </div>
              </div>
            </div>
            <div className="rating-2">
              <div className="rating-left">
                <img
                  src=" data:image/png;base64,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"
                  alt="..."
                />
              </div>
              <div className="rating-right">
                <div className="rating-top"> 10k</div>
                <div className="rating-bottom">
                  <p>Classes</p>
                  <p>complete</p>
                </div>
              </div>
            </div>

            <div className="rating-3">
              <div className="rating-left">
                <img
                  src=" data:image/png;base64,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"
                  alt="..."
                />
              </div>
              <div className="rating-right">
                <div className="rating-top"> 28k</div>
                <div className="rating-bottom">
                  <p>Students</p>
                  <p>enrolled</p>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <h2>Teacher Courses</h2>

            <div className="course-wraps">
              <div className="course-wrap-l">
                <img
                  src="https://echooling-react.vercel.app/static/media/1.2b718c64abf3cba58c0a.png"
                  alt="..."
                />
                <span className="image-top">UX Design</span>
                <div className="icons">
                  <div className="icons-l">
                    <i class="fa-regular fa-star"></i> 4.5 review
                  </div>
                  <div className="icons-r">
                    {" "}
                    <i class="fa-solid fa-child"></i> 56 students
                  </div>
                </div>
                <p className="description">
                  Dave Conservatoire is the Entirely free online
                </p>
                <div className="author-name">
                  <div className="author-l">
                    <img
                      src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu1BMVEVHcEyfjZu2q8u2q8y0qcq4rc2zqMq1qsuun760qMWsosWxqL+2q8u0qsy1qsuwpcezqMuwpcekmL24rc2wp8aPg51JIhS3rMy3rMyshYapncCXibKglLqlmb2ajrSPgaqKfKajd4ltYpUhDQgQAACFdqF/cJuzqMg+Gg5BGQyzqMZaNifixcRKWGxta3gqCgGWeXpoOzSbWkvGmrXSorzfvsO9kZzRorzBmpq4rc23rMyzqMq1qsyyp8mxpsi0qcy1qsvBud9GJRe/ttq8s9Wwp8anmr4jCAO3rdG5sNcYAgGuo8VVLRyfk7oAAAASAACvpMY8Ih42HBMqFA5NMCRBIRR2TDlMJhcuDwSRg66pncCNf6uYjbMxHhsfAgBbMyJnNCCroMPzupujl72ckLf/2L7/387do4n0xK0kFA/FveVSOS1eNimjkaZhNCFwSDSmak4JAQTjqow8Ewf+07f+zarYnH+tosSVh7DDmYaIeqWCc51HLSKbiqk9GQyombmTgaBdRk88HxQwGRCSfZRqVE/UmXfsqpHxwKWCVEKrcFu+dGbBgmaXiIyabFhELDamk7Cxp9B6YHN+b4JONkJqSUJIHQt0VVBdQTLOkG+RfIZXJRTssJRnPSz+yrHltJWHamT4xJ3twaBiPTuOZE/Wno3luJ/nr5z807/+2MbgnIy4jHl6QzCteWXwybPcrJi0cl3HpqGPU0H1zb5wdoy3fGh3ZYyViLSqnsxmUmJ2WmWNdICIeJFMLyofDgh9WFeCcnyIUDiZX0poRTRVPTmCRjD/0a67fm7csqiTcWu7n6LTpav/wqibgX+Ih5DTr7f62sycVUZUWmlvMCfAi3XMj3iumpNxaZ2rl7O6qcuGbIx9ZnnGtcfxsJewXVVwbHXbiH/Pe2zBpsfSv+D+w521jZXSlYmspK5SGAgIVzP+AAAAg3RSTlMA/n5aIrOg+xY9fVphzOxgsrTL8/IitOvM/uxg7Pmgsjx8WVp+tPLz8yO0PfO06xbLYJ/r+bOfy2D////////////////////////+/////////////////////////////////////////////////////////////////////////gPC5HkAAAOzSURBVDjLbZTlexpZFIcnbQpEKql3d7vWrrsvDAwzQDJAKG4tRUKLW/CFuLsnjbu7t1t3d113/TN2Zpp9kj7t+/W+z73n3nt+BwCWoSSStm8jk7dtJyVSgGcRt4EMwzAHYXNpGGvinhJi32bCIMy2012FOWwOCFOpa2KfNFa/ATIZHPu+tqJMefOZFDZMo1I3rV5prGKAIIRwjjcppC2OAnUek3Coq5aNeAgCk9ncZr2iwKEVCr2sHh4HO2qFkyCGIIiLHBPIZZlaoSxfxBe0IVR8G+rSWbGbk8WQ2F6ockikKpWyOJSuFuldCHYtKm3T45qTkjGFzstTSE6W+4xdJtOl4mz0NJdDIy5PvIdYjDlIVr7UpjQGzObREWuwEj2Zg1WMg79Pkhh37A2oTHauo3T+jtlsCv6pQrM4dBgH24aSmoo5EHJUZGNVlnSN3jFPRSJGpaiQQyMcMgVYHw6HU8Ugt5GvVVUPzD2wWifLJrurhT8gNJiOAScCpLS0tHCYmyI5JRd09hT9+9A486jZNy7MQ6gw4ZCAjWk4vCxZgdwzcfVRWXVkMfLAOCDUfseBCWct8Nw+HF4uKlOUWUI3xqunIwHT8GU1H7sSrsDrgJ0pOLwTOpv64ph1vrzSHHo4NPyTW1fLflwLGdh5AKeuQYcq9OmDlrv3y32WipLxAoULV2AYJAMv7MGpq+ejLZ0TM5WLcxXDg4slPV69i0dn4qwDNh7E+fqoSKs0nLWcu//3/ODPvhtNoqZaLmGAa4EX9+McyOM7PH53ccfdirFfS4KTp6T13zJBAhLw/FcYR/Y08h3uQ2p3aLrit7HgoM3bX1i7pKwHKHtxDtbw5QIDyysIdY2MlrYI/cdyc7iEgX0A8JImqtEcqdHJnQYPKmqfuVze6hE6v8+lY+sMBmMD9tMvR6NRTVSCZp53etxqnb99rneAX58FMRlMBtaNRFhey8jQZEjUmUpn59mLhon07t50fy4Cihm4kUR03ZbXM/YeZkklZXq9Mr211VLaXXy+/3ce3tDQ5qUwvfrN4RqWRKp0GoqudviG+vqGZlWN9jrcSfg/Aq9o+ap8mdMtOH38WsDa13tz4Z73xB8gkx6/HKTdNla2lNUuuPDLlUvG0uCOBVfVvZgf98evjOOuN7NZrEOKC2emA9YR0+y1qtsxDe8mPBnqt7bKVdlo0WzVVMA0VXVr4Z9b7215aja8szXf33/l5l/Xr9+OadvxWdwzJ8wHH3384fsxn37yxedfrhxB/wFIpm4t3CUNNAAAAABJRU5ErkJggg=="
                      alt="..."
                    />
                  </div>
                  <div className="author-r">
                    <p>Charlie Doyle</p>
                  </div>
                </div>
                <div className="tagsection">
                  <div className="tag-l">
                    <i class="fa-regular fa-note-sticky"></i> 5 Lessons
                  </div>
                  <div className="tag-r">$72.00</div>
                </div>
              </div>
              <div className="course-wrap-r">
                <img
                  src="https://echooling-react.vercel.app/static/media/2.0f4fbbe4e32c8eec212e.png"
                  alt="..."
                />
                <span className="image-top">UX Design</span>
                <div className="icons">
                  <div className="icons-l">
                    <i class="fa-regular fa-star"></i> 4.7 review
                  </div>
                  <div className="icons-r">
                    {" "}
                    <i class="fa-solid fa-child"></i> 77 students
                  </div>
                </div>
                <p className="description">
                  Strategy law and Organization Foundation
                </p>
                <div className="author-name">
                  <div className="author-l">
                    <img
                      src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu1BMVEVHcEyfjZu2q8u2q8y0qcq4rc2zqMq1qsuun760qMWsosWxqL+2q8u0qsy1qsuwpcezqMuwpcekmL24rc2wp8aPg51JIhS3rMy3rMyshYapncCXibKglLqlmb2ajrSPgaqKfKajd4ltYpUhDQgQAACFdqF/cJuzqMg+Gg5BGQyzqMZaNifixcRKWGxta3gqCgGWeXpoOzSbWkvGmrXSorzfvsO9kZzRorzBmpq4rc23rMyzqMq1qsyyp8mxpsi0qcy1qsvBud9GJRe/ttq8s9Wwp8anmr4jCAO3rdG5sNcYAgGuo8VVLRyfk7oAAAASAACvpMY8Ih42HBMqFA5NMCRBIRR2TDlMJhcuDwSRg66pncCNf6uYjbMxHhsfAgBbMyJnNCCroMPzupujl72ckLf/2L7/387do4n0xK0kFA/FveVSOS1eNimjkaZhNCFwSDSmak4JAQTjqow8Ewf+07f+zarYnH+tosSVh7DDmYaIeqWCc51HLSKbiqk9GQyombmTgaBdRk88HxQwGRCSfZRqVE/UmXfsqpHxwKWCVEKrcFu+dGbBgmaXiIyabFhELDamk7Cxp9B6YHN+b4JONkJqSUJIHQt0VVBdQTLOkG+RfIZXJRTssJRnPSz+yrHltJWHamT4xJ3twaBiPTuOZE/Wno3luJ/nr5z807/+2MbgnIy4jHl6QzCteWXwybPcrJi0cl3HpqGPU0H1zb5wdoy3fGh3ZYyViLSqnsxmUmJ2WmWNdICIeJFMLyofDgh9WFeCcnyIUDiZX0poRTRVPTmCRjD/0a67fm7csqiTcWu7n6LTpav/wqibgX+Ih5DTr7f62sycVUZUWmlvMCfAi3XMj3iumpNxaZ2rl7O6qcuGbIx9ZnnGtcfxsJewXVVwbHXbiH/Pe2zBpsfSv+D+w521jZXSlYmspK5SGAgIVzP+AAAAg3RSTlMA/n5aIrOg+xY9fVphzOxgsrTL8/IitOvM/uxg7Pmgsjx8WVp+tPLz8yO0PfO06xbLYJ/r+bOfy2D////////////////////////+/////////////////////////////////////////////////////////////////////////gPC5HkAAAOzSURBVDjLbZTlexpZFIcnbQpEKql3d7vWrrsvDAwzQDJAKG4tRUKLW/CFuLsnjbu7t1t3d113/TN2Zpp9kj7t+/W+z73n3nt+BwCWoSSStm8jk7dtJyVSgGcRt4EMwzAHYXNpGGvinhJi32bCIMy2012FOWwOCFOpa2KfNFa/ATIZHPu+tqJMefOZFDZMo1I3rV5prGKAIIRwjjcppC2OAnUek3Coq5aNeAgCk9ncZr2iwKEVCr2sHh4HO2qFkyCGIIiLHBPIZZlaoSxfxBe0IVR8G+rSWbGbk8WQ2F6ockikKpWyOJSuFuldCHYtKm3T45qTkjGFzstTSE6W+4xdJtOl4mz0NJdDIy5PvIdYjDlIVr7UpjQGzObREWuwEj2Zg1WMg79Pkhh37A2oTHauo3T+jtlsCv6pQrM4dBgH24aSmoo5EHJUZGNVlnSN3jFPRSJGpaiQQyMcMgVYHw6HU8Ugt5GvVVUPzD2wWifLJrurhT8gNJiOAScCpLS0tHCYmyI5JRd09hT9+9A486jZNy7MQ6gw4ZCAjWk4vCxZgdwzcfVRWXVkMfLAOCDUfseBCWct8Nw+HF4uKlOUWUI3xqunIwHT8GU1H7sSrsDrgJ0pOLwTOpv64ph1vrzSHHo4NPyTW1fLflwLGdh5AKeuQYcq9OmDlrv3y32WipLxAoULV2AYJAMv7MGpq+ejLZ0TM5WLcxXDg4slPV69i0dn4qwDNh7E+fqoSKs0nLWcu//3/ODPvhtNoqZaLmGAa4EX9+McyOM7PH53ccfdirFfS4KTp6T13zJBAhLw/FcYR/Y08h3uQ2p3aLrit7HgoM3bX1i7pKwHKHtxDtbw5QIDyysIdY2MlrYI/cdyc7iEgX0A8JImqtEcqdHJnQYPKmqfuVze6hE6v8+lY+sMBmMD9tMvR6NRTVSCZp53etxqnb99rneAX58FMRlMBtaNRFhey8jQZEjUmUpn59mLhon07t50fy4Cihm4kUR03ZbXM/YeZkklZXq9Mr211VLaXXy+/3ce3tDQ5qUwvfrN4RqWRKp0GoqudviG+vqGZlWN9jrcSfg/Aq9o+ap8mdMtOH38WsDa13tz4Z73xB8gkx6/HKTdNla2lNUuuPDLlUvG0uCOBVfVvZgf98evjOOuN7NZrEOKC2emA9YR0+y1qtsxDe8mPBnqt7bKVdlo0WzVVMA0VXVr4Z9b7215aja8szXf33/l5l/Xr9+OadvxWdwzJ8wHH3384fsxn37yxedfrhxB/wFIpm4t3CUNNAAAAABJRU5ErkJggg=="
                      alt="..."
                    />
                  </div>
                  <div className="author-r">
                    <p>Charlie Doyle</p>
                  </div>
                </div>
                <div className="tagsection">
                  <div className="tag-l">
                    <i class="fa-regular fa-note-sticky"></i> 4 Lessons
                  </div>
                  <div className="tag-r">$68.00</div>
                </div>
              </div>
            </div>
            <div className="course-wrapse">
              <div className="course-wrap-l">
                <img
                  src=" https://echooling-react.vercel.app/static/media/3.2f7b3c10359c070cae98.png"
                  alt="..."
                />
                <span className="image-top">UX Design</span>
                <div className="icons">
                  <div className="icons-l">
                    <i class="fa-regular fa-star"></i> 4.2 review
                  </div>
                  <div className="icons-r">
                    {" "}
                    <i class="fa-solid fa-child"></i> 77 students
                  </div>
                </div>
                <p className="description">
                  {" "}
                  Python for Data Science & Machine Learning
                </p>
                <div className="author-name">
                  <div className="author-l">
                    <img
                      src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu1BMVEVHcEyfjZu2q8u2q8y0qcq4rc2zqMq1qsuun760qMWsosWxqL+2q8u0qsy1qsuwpcezqMuwpcekmL24rc2wp8aPg51JIhS3rMy3rMyshYapncCXibKglLqlmb2ajrSPgaqKfKajd4ltYpUhDQgQAACFdqF/cJuzqMg+Gg5BGQyzqMZaNifixcRKWGxta3gqCgGWeXpoOzSbWkvGmrXSorzfvsO9kZzRorzBmpq4rc23rMyzqMq1qsyyp8mxpsi0qcy1qsvBud9GJRe/ttq8s9Wwp8anmr4jCAO3rdG5sNcYAgGuo8VVLRyfk7oAAAASAACvpMY8Ih42HBMqFA5NMCRBIRR2TDlMJhcuDwSRg66pncCNf6uYjbMxHhsfAgBbMyJnNCCroMPzupujl72ckLf/2L7/387do4n0xK0kFA/FveVSOS1eNimjkaZhNCFwSDSmak4JAQTjqow8Ewf+07f+zarYnH+tosSVh7DDmYaIeqWCc51HLSKbiqk9GQyombmTgaBdRk88HxQwGRCSfZRqVE/UmXfsqpHxwKWCVEKrcFu+dGbBgmaXiIyabFhELDamk7Cxp9B6YHN+b4JONkJqSUJIHQt0VVBdQTLOkG+RfIZXJRTssJRnPSz+yrHltJWHamT4xJ3twaBiPTuOZE/Wno3luJ/nr5z807/+2MbgnIy4jHl6QzCteWXwybPcrJi0cl3HpqGPU0H1zb5wdoy3fGh3ZYyViLSqnsxmUmJ2WmWNdICIeJFMLyofDgh9WFeCcnyIUDiZX0poRTRVPTmCRjD/0a67fm7csqiTcWu7n6LTpav/wqibgX+Ih5DTr7f62sycVUZUWmlvMCfAi3XMj3iumpNxaZ2rl7O6qcuGbIx9ZnnGtcfxsJewXVVwbHXbiH/Pe2zBpsfSv+D+w521jZXSlYmspK5SGAgIVzP+AAAAg3RSTlMA/n5aIrOg+xY9fVphzOxgsrTL8/IitOvM/uxg7Pmgsjx8WVp+tPLz8yO0PfO06xbLYJ/r+bOfy2D////////////////////////+/////////////////////////////////////////////////////////////////////////gPC5HkAAAOzSURBVDjLbZTlexpZFIcnbQpEKql3d7vWrrsvDAwzQDJAKG4tRUKLW/CFuLsnjbu7t1t3d113/TN2Zpp9kj7t+/W+z73n3nt+BwCWoSSStm8jk7dtJyVSgGcRt4EMwzAHYXNpGGvinhJi32bCIMy2012FOWwOCFOpa2KfNFa/ATIZHPu+tqJMefOZFDZMo1I3rV5prGKAIIRwjjcppC2OAnUek3Coq5aNeAgCk9ncZr2iwKEVCr2sHh4HO2qFkyCGIIiLHBPIZZlaoSxfxBe0IVR8G+rSWbGbk8WQ2F6ockikKpWyOJSuFuldCHYtKm3T45qTkjGFzstTSE6W+4xdJtOl4mz0NJdDIy5PvIdYjDlIVr7UpjQGzObREWuwEj2Zg1WMg79Pkhh37A2oTHauo3T+jtlsCv6pQrM4dBgH24aSmoo5EHJUZGNVlnSN3jFPRSJGpaiQQyMcMgVYHw6HU8Ugt5GvVVUPzD2wWifLJrurhT8gNJiOAScCpLS0tHCYmyI5JRd09hT9+9A486jZNy7MQ6gw4ZCAjWk4vCxZgdwzcfVRWXVkMfLAOCDUfseBCWct8Nw+HF4uKlOUWUI3xqunIwHT8GU1H7sSrsDrgJ0pOLwTOpv64ph1vrzSHHo4NPyTW1fLflwLGdh5AKeuQYcq9OmDlrv3y32WipLxAoULV2AYJAMv7MGpq+ejLZ0TM5WLcxXDg4slPV69i0dn4qwDNh7E+fqoSKs0nLWcu//3/ODPvhtNoqZaLmGAa4EX9+McyOM7PH53ccfdirFfS4KTp6T13zJBAhLw/FcYR/Y08h3uQ2p3aLrit7HgoM3bX1i7pKwHKHtxDtbw5QIDyysIdY2MlrYI/cdyc7iEgX0A8JImqtEcqdHJnQYPKmqfuVze6hE6v8+lY+sMBmMD9tMvR6NRTVSCZp53etxqnb99rneAX58FMRlMBtaNRFhey8jQZEjUmUpn59mLhon07t50fy4Cihm4kUR03ZbXM/YeZkklZXq9Mr211VLaXXy+/3ce3tDQ5qUwvfrN4RqWRKp0GoqudviG+vqGZlWN9jrcSfg/Aq9o+ap8mdMtOH38WsDa13tz4Z73xB8gkx6/HKTdNla2lNUuuPDLlUvG0uCOBVfVvZgf98evjOOuN7NZrEOKC2emA9YR0+y1qtsxDe8mPBnqt7bKVdlo0WzVVMA0VXVr4Z9b7215aja8szXf33/l5l/Xr9+OadvxWdwzJ8wHH3384fsxn37yxedfrhxB/wFIpm4t3CUNNAAAAABJRU5ErkJggg=="
                      alt="..."
                    />
                  </div>
                  <div className="author-r">
                    <p>Charlie Doyle</p>
                  </div>
                </div>
                <div className="tagsection">
                  <div className="tag-l">
                    <i class="fa-regular fa-note-sticky"></i> 4 Lessons
                  </div>
                  <div className="tag-r">$68.00</div>
                </div>
              </div>
              <div className="course-wrap-r">
                <img
                  src="https://echooling-react.vercel.app/static/media/4.1e8ed20eff0c42a15afb.png "
                  alt="..."
                />
                <span className="image-top">UX Design</span>
                <div className="icons">
                  <div className="icons-l">
                    <i class="fa-regular fa-star"></i> 4.3 review
                  </div>
                  <div className="icons-r">
                    {" "}
                    <i class="fa-solid fa-child"></i> 77 students
                  </div>
                </div>
                <p className="description">
                  Strategy law and Organization Foundation
                </p>
                <div className="author-name">
                  <div className="author-l">
                    <img
                      src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu1BMVEVHcEyfjZu2q8u2q8y0qcq4rc2zqMq1qsuun760qMWsosWxqL+2q8u0qsy1qsuwpcezqMuwpcekmL24rc2wp8aPg51JIhS3rMy3rMyshYapncCXibKglLqlmb2ajrSPgaqKfKajd4ltYpUhDQgQAACFdqF/cJuzqMg+Gg5BGQyzqMZaNifixcRKWGxta3gqCgGWeXpoOzSbWkvGmrXSorzfvsO9kZzRorzBmpq4rc23rMyzqMq1qsyyp8mxpsi0qcy1qsvBud9GJRe/ttq8s9Wwp8anmr4jCAO3rdG5sNcYAgGuo8VVLRyfk7oAAAASAACvpMY8Ih42HBMqFA5NMCRBIRR2TDlMJhcuDwSRg66pncCNf6uYjbMxHhsfAgBbMyJnNCCroMPzupujl72ckLf/2L7/387do4n0xK0kFA/FveVSOS1eNimjkaZhNCFwSDSmak4JAQTjqow8Ewf+07f+zarYnH+tosSVh7DDmYaIeqWCc51HLSKbiqk9GQyombmTgaBdRk88HxQwGRCSfZRqVE/UmXfsqpHxwKWCVEKrcFu+dGbBgmaXiIyabFhELDamk7Cxp9B6YHN+b4JONkJqSUJIHQt0VVBdQTLOkG+RfIZXJRTssJRnPSz+yrHltJWHamT4xJ3twaBiPTuOZE/Wno3luJ/nr5z807/+2MbgnIy4jHl6QzCteWXwybPcrJi0cl3HpqGPU0H1zb5wdoy3fGh3ZYyViLSqnsxmUmJ2WmWNdICIeJFMLyofDgh9WFeCcnyIUDiZX0poRTRVPTmCRjD/0a67fm7csqiTcWu7n6LTpav/wqibgX+Ih5DTr7f62sycVUZUWmlvMCfAi3XMj3iumpNxaZ2rl7O6qcuGbIx9ZnnGtcfxsJewXVVwbHXbiH/Pe2zBpsfSv+D+w521jZXSlYmspK5SGAgIVzP+AAAAg3RSTlMA/n5aIrOg+xY9fVphzOxgsrTL8/IitOvM/uxg7Pmgsjx8WVp+tPLz8yO0PfO06xbLYJ/r+bOfy2D////////////////////////+/////////////////////////////////////////////////////////////////////////gPC5HkAAAOzSURBVDjLbZTlexpZFIcnbQpEKql3d7vWrrsvDAwzQDJAKG4tRUKLW/CFuLsnjbu7t1t3d113/TN2Zpp9kj7t+/W+z73n3nt+BwCWoSSStm8jk7dtJyVSgGcRt4EMwzAHYXNpGGvinhJi32bCIMy2012FOWwOCFOpa2KfNFa/ATIZHPu+tqJMefOZFDZMo1I3rV5prGKAIIRwjjcppC2OAnUek3Coq5aNeAgCk9ncZr2iwKEVCr2sHh4HO2qFkyCGIIiLHBPIZZlaoSxfxBe0IVR8G+rSWbGbk8WQ2F6ockikKpWyOJSuFuldCHYtKm3T45qTkjGFzstTSE6W+4xdJtOl4mz0NJdDIy5PvIdYjDlIVr7UpjQGzObREWuwEj2Zg1WMg79Pkhh37A2oTHauo3T+jtlsCv6pQrM4dBgH24aSmoo5EHJUZGNVlnSN3jFPRSJGpaiQQyMcMgVYHw6HU8Ugt5GvVVUPzD2wWifLJrurhT8gNJiOAScCpLS0tHCYmyI5JRd09hT9+9A486jZNy7MQ6gw4ZCAjWk4vCxZgdwzcfVRWXVkMfLAOCDUfseBCWct8Nw+HF4uKlOUWUI3xqunIwHT8GU1H7sSrsDrgJ0pOLwTOpv64ph1vrzSHHo4NPyTW1fLflwLGdh5AKeuQYcq9OmDlrv3y32WipLxAoULV2AYJAMv7MGpq+ejLZ0TM5WLcxXDg4slPV69i0dn4qwDNh7E+fqoSKs0nLWcu//3/ODPvhtNoqZaLmGAa4EX9+McyOM7PH53ccfdirFfS4KTp6T13zJBAhLw/FcYR/Y08h3uQ2p3aLrit7HgoM3bX1i7pKwHKHtxDtbw5QIDyysIdY2MlrYI/cdyc7iEgX0A8JImqtEcqdHJnQYPKmqfuVze6hE6v8+lY+sMBmMD9tMvR6NRTVSCZp53etxqnb99rneAX58FMRlMBtaNRFhey8jQZEjUmUpn59mLhon07t50fy4Cihm4kUR03ZbXM/YeZkklZXq9Mr211VLaXXy+/3ce3tDQ5qUwvfrN4RqWRKp0GoqudviG+vqGZlWN9jrcSfg/Aq9o+ap8mdMtOH38WsDa13tz4Z73xB8gkx6/HKTdNla2lNUuuPDLlUvG0uCOBVfVvZgf98evjOOuN7NZrEOKC2emA9YR0+y1qtsxDe8mPBnqt7bKVdlo0WzVVMA0VXVr4Z9b7215aja8szXf33/l5l/Xr9+OadvxWdwzJ8wHH3384fsxn37yxedfrhxB/wFIpm4t3CUNNAAAAABJRU5ErkJggg=="
                      alt="..."
                    />
                  </div>
                  <div className="author-r">
                    <p>Charlie Doyle</p>
                  </div>
                </div>
                <div className="tagsection">
                  <div className="tag-l">
                    <i class="fa-regular fa-note-sticky"></i> 4 Lessons
                  </div>
                  <div className="tag-r">$68.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
