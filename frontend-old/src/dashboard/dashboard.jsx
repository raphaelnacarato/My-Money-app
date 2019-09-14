import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NumberFormat from 'react-number-format'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        
                
                        <ValueBox cols='12 4' color='green' icon='bank' text='Total de Créditos'
                            value={<NumberFormat
                                displayType={'text'} value={credit} 
                                thousandSeparator={'.'} prefix={'R$ '}
                                decimalSeparator={','} decimalScale={0} />}
                        />
                        <ValueBox cols='12 4' color='red' icon='credit-card' text='Total de Débitos'
                            value={<NumberFormat
                                displayType={'text'} value={debt} 
                                thousandSeparator={'.'} prefix={'R$ '}
                                decimalSeparator={','} decimalScale={0} />}
                        />
                        <ValueBox cols='12 4' color='blue' icon='money' text='Valor Consolidado'
                            value={<NumberFormat
                                displayType={'text'} value={credit - debt} 
                                thousandSeparator={'.'} prefix={'R$ '}
                                decimalSeparator={','} decimalScale={0} />}
                        />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)