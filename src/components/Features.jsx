import React from 'react'
import './Features.css'
import {FaCloudDownloadAlt} from "react-icons/fa";
import {FaCloudUploadAlt} from "react-icons/fa";

const Features = () => {
  return (
    <div id='feature'>
      <section className='feature-one'>
        <div className='feature-one-left'>
          <button className='btn btn-active'>TAB 1</button>
          <button className='btn btn-tag-2'>TAB 2</button>
          <button className='btn btn-tag-3'>TAB 3</button>
        </div>
        <div className='feature-one-center'>
          <h3>Tabs with soft transitioning effect.</h3>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
              bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
              justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
              penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
              bibendum laoreet.</p>
          </div>
          <button className='btn-download'>Download</button>
        </div>
        <div className='feature-one-right'>
          <img src="img/image_right_u255.png" alt="" />
        </div>
      </section>
      <section className='feature-two'>
        <div className='feature-two-left'>
          <img src="img/image_left_sub_list_u260.png" alt="" />
        </div>
        <div className='feature-two-right'>
          <h3>Sub list section</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.</p>
          <div className='dow-upload-title'>
            <div className='download-title'>
              <div>
                <button>
                  <FaCloudUploadAlt className='icon-update' />
                </button>
              </div>
              <div className='download-content'>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.</p>
              </div>
            </div>
            <div className='upload-title'>
              <div>
                <button>
                  <FaCloudDownloadAlt className='icon-download' />
                </button>
              </div>
              <div className='upload-content'>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                  sit amet lacus accumsan et viverra justo commodo.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='feature-three'>
        <div className='feature-three-left'>
          <h3>Standard Picture Section</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
            et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
            natoque penatibus et magnis dis parturient montes.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
            bibendum laoreet.</p>
        </div>
        <div className='feature-three-right'>
          <img src="img/image_right_standard_u262.png" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Features
