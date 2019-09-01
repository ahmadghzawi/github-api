import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
            <footer 
                className={
                    this.props.battle || !this.props.items ? 
                    "fixed-bottom page-footer font-small pt-3 bg-dark text-white container-fluid mt-3" : 
                    "page-footer font-small pt-3 bg-dark text-white container-fluid mt-3"}
                >
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright text-center py-3">© 2019 Copyright: Ahmad Ghzawi</div>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;