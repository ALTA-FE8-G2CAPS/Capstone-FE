import Image from "next/image"
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "../../styles/Detail.module.css";

const DetailPage = () => {
  return (
    <div>
        <div className={styles.container}>
          <Row>
            <Col md='12' lg='4' >
              <Row className={styles.leftCol}>
                <div>
                  <Image
                  src="/basket.jpg"
                  width={500}
                  height={500}
                  className={styles.imageBox}
                  />
                </div>
              </Row>
              <Row>
                <div className={styles.scrollImage}>
                  <div>
                    <Image 
                    src="/tennis.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                    />
                  </div>
                  <div>
                  <Image 
                    src="/futsal.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                  </div>
                  <div>
                  <Image 
                    src="/volley.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                  </div>
                  <div>
                  <Image 
                    src="/basket.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                  </div>
                </div>
              </Row>
            </Col>
            <Col md='12' lg='8'>
              2
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default DetailPage