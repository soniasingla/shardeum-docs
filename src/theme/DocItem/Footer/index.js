import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import DocsFeedBack from '../../../components/DocsFeedBack/DocsFeedBack';

export default function FooterWrapper(props) {
    return (
        <>

            <Footer {...props} />
            <DocsFeedBack title={"Docs Feedback" }/>
        </>
    );
}
