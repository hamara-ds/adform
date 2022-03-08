/* eslint-disable */

import React, {Fragment, useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {Controller as HookController, get, useForm} from "react-hook-form";
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

const defaultValues = {
};

let Controller

function App() {
    // Wraps the whole form
    const { handleSubmit, register, reset, control, setValue, getValues } = useForm({defaultValues});
    const [data, setData] = useState(null);

    setValue('make', 'Ford')
    setValue('model', 'F-150')


// MAKE FUNCTION
    function MakesSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('make', e.label)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <Autocomplete
                        options={makes}
                        getOptionLabel={option => option.label}
                        // getOptionSelected={(option, value) => option.make === getValues().make}
                        renderOption={option => (
                            <span>
                            {option.label}
                            </span>
                        )}
                        renderInput={params => (
                            <TextField
                                required
                                {...params}
                                label="Choose a make"
                                variant="outlined"
                            />
                        )}
                        defaultValue={{label : "Ford"}}
                        onChange={(e, data) => onChangeHandler(data)}
                    />
                )}
                onChange={([, data]) => data}
                name="make"
                control={control}
            />
        );
    }

// MODEL FUNCTION
    function ModelSelect({ onChange: ignored, control }) {
        function modelOnChangeHandler(e, data) {
            setValue('model', e.label)
            console.log(getValues())
        }

        return (
            <div>
                <HookController
                    render={({ field: {onChange},
                                 fieldState : { invalid, isTouched, isDirty},
                                 formState}) => (
                        <Autocomplete
                            options={current_models}
                            getOptionLabel={option => option.label}
                            renderOption={option => (
                                <span>
                                {option.label}
                                </span>
                            )}
                            renderInput={params => (
                                <TextField
                                    required
                                    {...params}
                                    label="Choose a model"
                                    variant="outlined"
                                />
                            )}
                            groupBy={(option) => option.make}
                            filterOptions={(options, state) => options.filter(option => option.make === getValues().make)}
                            onChange={(e, data) => modelOnChangeHandler(data)}
                        />
                    )}
                    onChange={([, data]) => data}
                    defaultValue={{label: "F-150", make: "Ford"}}
                    name="model"
                    control={control}
                />
            </div>
        );
    }

// YEAR FUNCTION
    function YearSelect({ onChange: ignored, control }) {
        const [selectedDate, handleDateChange] = useState(new Date());

        function onChangeHandler(e, data) {
            let year = JSON.stringify(e).substring(1, 5)
            console.log(year)
            setValue('year', year) // set this so the form knows!
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            views={["year"]}
                            label="Year only"
                            value={selectedDate}
                            onChange={onChangeHandler}
                            disableFuture={true}
                        />
                    </MuiPickersUtilsProvider>
                )}
                onChange={([, data]) => onChangeHandler}
                name="year"
                control={control}
            />
        );
    }

// EMAIL FUNCTION
    function EmailSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            console.log(e.target.value, data)
            setValue('email', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState: getValues}) => (
                    <TextField
                        required
                        label="E-mail"
                        variant="outlined"
                        type="email"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => onChangeHandler(data)}
                name="email"
                control={control}
            />
        );
    }

// MILEAGE FUNCTION
    function MileageSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('mileage', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <TextField
                        required
                        label="Mileage"
                        variant="outlined"
                        type="number"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => data}
                name="mileage"
                control={control}
            />
        );
    }

// TITLESTATUS FUNCTION
    function TitleSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('title', e.label)
            console.log(getValues())
        }

        return (
            <HookController
                render={({
                             field: {onChange},
                             fieldState: {invalid, isTouched, isDirty},
                             formState
                         }) => (
                    <Autocomplete
                        options={titles}
                        getOptionLabel={option => option.label}
                        // getOptionSelected={(option, value) => option.make === getValues().make}
                        renderOption={option => (
                            <span>
                            {option.label}
                            </span>
                        )}
                        renderInput={params => (
                            <TextField
                                required
                                {...params}
                                label="Choose a title"
                                variant="outlined"
                            />
                        )}
                        defaultValue={{label: "Clear"}}
                        onChange={(e, data) => onChangeHandler(data)}
                    />
                )}
                onChange={([, data]) => data}
                name="title"
                control={control}
            />
        );
    }

//TRANSMISSION FUNCTION
    function TransmissionSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('transmission', e.label)
            console.log(getValues())
        }

        return (
            <HookController
                render={({
                             field: {onChange},
                             fieldState: {invalid, isTouched, isDirty},
                             formState
                         }) => (
                    <Autocomplete
                options={transmissions}
                getOptionLabel={option => option.label}
                // getOptionSelected={(option, value) => option.make === getValues().make}
                renderOption={option => (
                    <span>
                            {option.label}
                            </span>
                )}
                renderInput={params => (
                    <TextField
                        required
                        {...params}
                        label="Choose a transmission"
                        variant="outlined"
                    />
                )}
                defaultValue={{label: "Automatic"}}
                onChange={(e, data) => onChangeHandler(data)}
            />
        )}
    onChange={([, data]) => data}
    name="transmission"
    control={control}
    />
);
}

//FIRST NAME FUNCTION
    function FirstNameSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('firstName', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => data}
                name="firstName"
                control={control}
            />
        );
    }

//LAST NAME FUNCTION
    function LastNameSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('lastName', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => data}
                name="lastName"
                control={control}
            />
        );
    }

//PHONE NUMBER FUNCTION
//**TODO** Get the telephone number pattern working     
    function PhoneNumberSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('number', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <TextField
                        required
                        label="Phone Number"
                        variant="outlined"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => data}
                name="number"
                control={control}
            />
        );
    }

// POSTALCODE FUNCTION
    function PostcodeSelect({ onChange: ignored, control }) {
        function onChangeHandler(e, data) {
            setValue('postcode', e.target.value)
            console.log(getValues())
        }

        return (
            <HookController
                render={({ field: {onChange},
                             fieldState : { invalid, isTouched, isDirty},
                             formState}) => (
                    <TextField
                        required
                        label="Postal Code"
                        variant="outlined"
                        onChange={onChangeHandler}
                    />
                )}
                onChange={([, data]) => data}
                name="postcode"
                control={control}
            />
        );
    }




    return (
        <form onSubmit={handleSubmit(data => setData(data))} className="form">
            <div>
                <div>
                <div>
                <div>
                <section>
                    <label>Make</label>
                    <MakesSelect control={control}/>
                </section>
                </div>
                </div>
                </div>

                <section>
                    <label>Model</label>
                    <ModelSelect control={control}/>
                </section>
                <section>
                    <label>Year</label>
                    <YearSelect control={control}/>
                </section>
                <section>
                    <label>Mileage</label>
                    <MileageSelect control={control}/>
                </section>
                <section>
                    <label>Title Status</label>
                    <TitleSelect control={control}/>
                </section>
                <section>
                    <label>Transmission</label>
                    <TransmissionSelect control={control}/>
                </section>
                <section>
                    <label>First Name</label>
                    <FirstNameSelect control={control}/>
                </section>
                <section>
                    <label>Last Name</label>
                    <LastNameSelect control={control}/>
                </section>
                <section>
                    <label>Phone Number</label>
                    <PhoneNumberSelect control={control}/>
                </section>
                <section>
                    <label>Postcode</label>
                    <PostcodeSelect control={control}/>
                </section>
                <section>
                    <label>Email</label>
                    <EmailSelect control={control}/>
                </section>

                <input type="submit"/>
            </div>
        </form>
    );
}

class ContactFormView extends React.Component {
    static get Controller() {
        if (Controller) return Controller

        try {
            Controller = require('../controllers/ContactFormController')
            Controller = Controller.default || Controller

            return Controller
        }
        catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
                Controller = ContactFormView

                return Controller
            }

            throw e
        }
    }

    componentDidMount() {
        /* View has no WebFlow data attributes */

        scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
            const loading = active.loading.then((script) => {
                new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

                return next
            })

            return active.isAsync ? next : loading
        }))
    }

    render() {
        const proxies = ContactFormView.Controller !== ContactFormView ? transformProxies(this.props.children) : {
            'make': [],
            'title': [],
            'firstName': [],
            'number': [],
            'year': [],
            'mileage': [],
            'transmission': [],
            'lastName': [],
            'postalCode': [],
            'email': [],
            'submit': [],
        }

        return (
            <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/autodopt.webflow.css);
        ` }} />
        <span className="af-view">
          <App />
            {/*<form method="post" name="wf-form-make-2" data-name="make" id="wf-form-make-2" className="af-class-form">*/}
            {/*  <h1 className="af-class-heading-7">Fill out this form and leave the rest to us, <br />we promise not to leave you hanging</h1>*/}
            {/*  <div className="af-class-columns-4 w-row">*/}
            {/*    <div className="af-class-column-8 w-col w-col-6">*/}
            {/*      <div className="w-layout-grid af-class-grid-5">*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb317f-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div className="af-class-text-block-14">Make</div>*/}
            {/*        </div>*/}
            {/*        /!*<div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3182-cac2a066" className="af-class-section-5 af-class-wf-section">{map(proxies['make'], props => <input type="text" maxLength={256} name="Make" data-name="Make" placeholder id="Make" required {...{...props, className: `af-class-text-field-3 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*!/*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3182-cac2a066" className="af-class-section-5 af-class-wf-section">{map(proxies['make'], props => <App />)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3184-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3185-cac2a066" className="af-class-text-block-15">Year</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3187-cac2a066" className="af-class-section-6 af-class-wf-section"><input type="number" className="af-class-text-field-3 w-input" maxLength={256} name="Year" data-name="Year" placeholder id="Year" required /></div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3189-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb318a-cac2a066" className="af-class-text-block-16">Title Status</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb318c-cac2a066" className="af-class-section-7 af-class-wf-section">{map(proxies['title'], props => <input type="text" maxLength={256} name="TitleStatus" data-name="TitleStatus" placeholder id="TitleStatus" required {...{...props, className: `af-class-text-field-3 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb318e-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb318f-cac2a066" className="af-class-text-block-17">First Name</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3191-cac2a066" className="af-class-section-8 af-class-wf-section">{map(proxies['firstname'], props => <input type="text" maxLength={256} name="FirstName" data-name="FirstName" placeholder id="FirstName" required {...{...props, className: `af-class-text-field-3 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb3193-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div className="af-class-text-block-18">Phone Number</div>*/}
            {/*        </div>*/}
            {/*        <div className="af-class-section-9 af-class-wf-section">{map(proxies['number'], props => <input type="tel" maxLength={256} name="PhoneNumber" data-name="PhoneNumber" placeholder id="PhoneNumber" required {...{...props, className: `af-class-text-field-3 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="af-class-column-9 w-col w-col-6">*/}
            {/*      <div className="w-layout-grid af-class-grid-4">*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb319a-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div className="af-class-text-block-14">Model</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb319d-cac2a066" className="af-class-section-5 af-class-wf-section">{map(proxies['year'], props => <input type="text" maxLength={256} name="Model" data-name="Model" placeholder id="Model" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb319f-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a0-cac2a066" className="af-class-text-block-15">Mileage</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a2-cac2a066" className="af-class-section-6 af-class-wf-section">{map(proxies['mileage'], props => <input type="text" maxLength={256} name="Mileage" data-name="Mileage" placeholder id="Mileage" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a4-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a5-cac2a066" className="af-class-text-block-16">Transmission</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a7-cac2a066" className="af-class-section-7 af-class-wf-section">{map(proxies['transmission'], props => <input type="text" maxLength={256} name="Transmission" data-name="Transmission" placeholder id="Transmission" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31a9-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31aa-cac2a066" className="af-class-text-block-17">Last Name</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31ac-cac2a066" className="af-class-section-8 af-class-wf-section">{map(proxies['lastname'], props => <input type="text" maxLength={256} name="LastName" data-name="LastName" placeholder id="LastName" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31ae-cac2a066" className="af-class-section-4 af-class-wf-section">*/}
            {/*          <div className="af-class-text-block-18">Postal code</div>*/}
            {/*        </div>*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31b1-cac2a066" className="af-class-section-9 af-class-wf-section">{map(proxies['postalcode'], props => <input type="text" maxLength={256} name="PostalCode" data-name="PostalCode" placeholder id="PostalCode" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="af-class-container-8 w-container">*/}
            {/*    <div className="w-layout-grid af-class-grid-7">*/}
            {/*      <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31b5-cac2a066" className="af-class-section-11 af-class-wf-section">*/}
            {/*        <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31b6-cac2a066" className="af-class-text-block-20">Email</div>*/}
            {/*      </div>*/}
            {/*      <div id="w-node-_9a6d4092-2f7a-c26a-e7ca-1b864ecb31b8-cac2a066" className="af-class-section-12 af-class-wf-section">{map(proxies['email'], props => <input type="email" maxLength={256} name="Email" data-name="Email" placeholder id="Email" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}</div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="af-class-section-10 af-class-wf-section">*/}
            {/*    {map(proxies['submit'], props => <a id="submitButton" href="thank-you.html" {...{...props, className: `af-class-button-2 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Submit Form</React.Fragment>}</a>)}*/}
            {/*  </div>*/}
            {/*</form>*/}
        </span>
      </span>
        )
    }
}

export default ContactFormView

/* eslint-enable */

const makes = [
    { label: "Ford"},
    { label : "Chevy"},
    { label : "Dodge"}
];

const transmissions = [
    { label: "Automatic"},
    { label: "Manual"}
]

const titles = [
    { label: "Clear"},
    { label: "Salvage"},
    { label: "Junk"},
    { label: "Bonded"},
    { label: "Reconstructed"},
    { label: "Affidavit"},
    { label: "Rebuilt"},
    { label: "Water Damage"},
    { label: "Odometer Rollback"},
    { label: "Dismantled"}
]

const all_model_lists = {
    "Ford" : [{ label: "F-150", make: "Ford"},
        { label: "Mustang", make: "Ford"}],
    "Chevy" : [{ label : "Cavalier", make: "Chevy"},
        { label : "Malibu", make: "Chevy"} ],
    "Default" : []
};

const current_models = [
    { label: "F-150", make: "Ford"},
    { label: "Mustang", make: "Ford"},
    { label : "Cavalier", make: "Chevy"},
    { label : "Malibu", make: "Chevy"},
    { label : "Avenger", make: "Dodge"},
    { label : "Durango", make: "Dodge"},
    { label : "Ram", make : "Dodge"}
];
