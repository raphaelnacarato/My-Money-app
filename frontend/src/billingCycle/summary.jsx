import React from 'react'
import NumberFormat from 'react-number-format'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' text='Total de Crédito'
                    value={<NumberFormat
                        displayType={'text'} value={credit}
                        thousandSeparator={'.'} prefix={'R$ '}
                        decimalSeparator={','} decimalScale={0} />}
                />
                <ValueBox cols='12 4' color='red' icon='credit-card' text='Total de Débito'
                    value={<NumberFormat
                        displayType={'text'} value={debt}
                        thousandSeparator={'.'} prefix={'R$ '}
                        decimalSeparator={','} decimalScale={0} />}
                />
                <ValueBox cols='12 4' color='blue' icon='money' text='Valor Consolidado'
                    value={<NumberFormat
                        displayType={'text'} value={credit - debt}
                        thousandSeparator={'.'} prefix={'R$ '}
                        decimalSeparator={','} decimalScale={0} />}  />
            </Row>
        </fieldset>
    </Grid>
)