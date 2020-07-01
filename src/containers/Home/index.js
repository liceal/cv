import React, { Component, useState, useRef } from 'react';
import Header from '@/components/Header/Header'
import { usePdf } from '@mikecousins/react-pdf';
import PDF from 'react-pdf-js'

import './home.less'

class Home extends Component {
    render() {

        return (
            <div className='font'>
                <Header active="1" />
                <PDF
                    file="http://linxianao.com/cv/pdfCv.pdf"
                />

            </div>
        )
    }
}

export default Home