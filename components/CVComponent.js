import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import Datepicker from 'react-datepicker'
import axios from 'axios'

const INSERT_CV_MUTATION = gql`
    mutation insertCV($InputCV: InputCV!) {
        insertCV(InputCV: $InputCV) {
            error
            message
        }
    }
`

export const CVComponent = () => {
    const [judgementStatus, setJudgementStatus] = useState(true);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [hasDriveLicense, setHasDriveLicense] = useState(true);

    const [insertCV, { loading }] = useMutation(INSERT_CV_MUTATION);
    const [submitting, setSubmitting] = useState(false);

    const router = useRouter();

    const familyMembers = [
        {
            fmNumbering: 1,
            fmNames: "",
            fmMember: "",
            fmDateOfBirth: "",
            fmJobStatus: "",
            fmPhone: ""
        },
        {
            fmNumbering: 2,
            fmNames: "",
            fmMember: "",
            fmDateOfBirth: "",
            fmJobStatus: "",
            fmPhone: ""
        },
        {
            fmNumbering: 3,
            fmNames: "",
            fmMember: "",
            fmDateOfBirth: "",
            fmJobStatus: "",
            fmPhone: ""
        },
        {
            fmNumbering: 4,
            fmNames: "",
            fmMember: "",
            fmDateOfBirth: "",
            fmJobStatus: "",
            fmPhone: ""
        }
    ];

    const educations = [
        {
            eduNumbering: 1,
            eduPlace: "",
            eduSchoolName: "",
            eduEnteredDate: "",
            eduGraduatedDate: "",
            eduProfession: "",
            eduDegree: "",
            eduGPA: ""
        },
        {
            eduNumbering: 2,
            eduPlace: "",
            eduSchoolName: "",
            eduEnteredDate: "",
            eduGraduatedDate: "",
            eduProfession: "",
            eduDegree: "",
            eduGPA: ""
        },
        {
            eduNumbering: 3,
            eduPlace: "",
            eduSchoolName: "",
            eduEnteredDate: "",
            eduGraduatedDate: "",
            eduProfession: "",
            eduDegree: "",
            eduGPA: ""
        },
        {
            eduNumbering: 4,
            eduPlace: "",
            eduSchoolName: "",
            eduEnteredDate: "",
            eduGraduatedDate: "",
            eduProfession: "",
            eduDegree: "",
            eduGPA: ""
        }
    ];

    const courses = [
        {
            coNumbering: 1,
            coSubject: "",
            coPlace: "",
            coDate: "",
            coDuration: "",
            coDegreeNumber: "",
            coGPA: ""
        },
        {
            coNumbering: 2,
            coSubject: "",
            coPlace: "",
            coDate: "",
            coDuration: "",
            coDegreeNumber: "",
            coGPA: ""
        },
        {
            coNumbering: 3,
            coSubject: "",
            coPlace: "",
            coDate: "",
            coDuration: "",
            coDegreeNumber: "",
            coGPA: ""
        },
        {
            coNumbering: 4,
            coSubject: "",
            coPlace: "",
            coDate: "",
            coDuration: "",
            coDegreeNumber: "",
            coGPA: ""
        }
    ]

    const experiences = [
        {
            expNumbering: 1,
            expCompanyName: "",
            expWorks: "",
            expPosition: "",
            expStartDate: "",
            expEndDate: "",
            expSalary: "",
            expReasonOut: ""
        },
        {
            expNumbering: 2,
            expCompanyName: "",
            expWorks: "",
            expPosition: "",
            expStartDate: "",
            expEndDate: "",
            expSalary: "",
            expReasonOut: ""
        },
        {
            expNumbering: 3,
            expCompanyName: "",
            expWorks: "",
            expPosition: "",
            expStartDate: "",
            expEndDate: "",
            expSalary: "",
            expReasonOut: ""
        },
        {
            expNumbering: 4,
            expCompanyName: "",
            expWorks: "",
            expPosition: "",
            expStartDate: "",
            expEndDate: "",
            expSalary: "",
            expReasonOut: ""
        }
    ]

    const skills = [
        {
            skNumbering: 1,
            skillName: "???????????????????? ???? ????????????",
            skillRate: ""
        },
        {
            skNumbering: 2,
            skillName: "?????????? ???????????? ????????????????????????",
            skillRate: ""
        },
        {
            skNumbering: 3,
            skillName: "?????????? ???????????? ???????????????? ????????????????????",
            skillRate: ""
        },
        {
            skNumbering: 4,
            skillName: "?????????????????? ????????",
            skillRate: ""
        },
        {
            skNumbering: 5,
            skillName: "???????????????? ?????????????? ????????????",
            skillRate: ""
        },
        {
            skNumbering: 6,
            skillName: "?????????????? ???????????? ??????????????????",
            skillRate: ""
        },
        {
            skNumbering: 7,
            skillName: "???????? ?????????? ?????????????????? ??????????????????????",
            skillRate: ""
        },
        {
            skNumbering: 8,
            skillName: "?????? ???????? ??????????????",
            skillRate: ""
        },
        {
            skNumbering: 9,
            skillName: "???????????? ??????????????",
            skillRate: ""
        },
        {
            skNumbering: 10,
            skillName: "???????????????????? ????????????",
            skillRate: ""
        },
        {
            skNumbering: 11,
            skillName: "???????????????????????? ????????????????",
            skillRate: ""
        }
    ]

    const urgentCalls = [
        {
            urgentCallsNumbering: 1,
            urgentCallsName: "",
            urgentCallsMember: "",
            urgentCallsPhone: ""
        },
        {
            urgentCallsNumbering: 2,
            urgentCallsName: "",
            urgentCallsMember: "",
            urgentCallsPhone: ""
        },
        {
            urgentCallsNumbering: 3,
            urgentCallsName: "",
            urgentCallsMember: "",
            urgentCallsPhone: ""
        }
    ]

    let driveLicenses = [];

    const handleHasDriveLicense = e => {
        const { name, value } = e.target;
        (value == "????????") ? setHasDriveLicense(true) : setHasDriveLicense(false);
    }

    const handleDriveLicenseInput = e => {
        const target = e.target;
        var value = target.value;
        if (target.checked) {
            driveLicenses.push(value);
        } else {
            driveLicenses = driveLicenses.filter(item => item !== value)
        }

        console.log(driveLicenses, 'hm')
    }

    const handleJudgement = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        (value == "????????") ? setJudgementStatus(true) : setJudgementStatus(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        const form = event.target;
        const formData = new window.FormData(form);
        const familyName = formData.get('familyName');
        const lastName = formData.get('lastName');
        const firstName = formData.get('firstName');
        const dateOfBirth = formData.get('dateOfBirth');
        const placeOfBirth = formData.get('placeOfBirth');
        const stateOfBirth = formData.get('stateOfBirth');
        const nationality = formData.get('nationality');
        const gender = formData.get('gender');
        const portrait = formData.get('portrait');
        const registerNumber = formData.get('registerNumber');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const phoneHome = formData.get('phoneHome');
        const address = formData.get('address');
        const addressStatus = formData.get('addressStatus');
        const insurance1 = formData.get('insurance1');
        const insurance2 = formData.get('insurance2');
        const jobInterested = formData.get('jobInterested');
        const salaryWant = formData.get('salaryWant');
        const marriageStatus = formData.get('marriageStatus');
        const expYears = formData.get('expYears');
        const jobless = formData.get('jobless');
        const hasDriveLicense = formData.get('hasDriveLicense');

        for (let el of familyMembers) {
            el.fmNames = formData.get('fmNames-' + el.fmNumbering);
            el.fmMember = formData.get('fmMember-' + el.fmNumbering);
            el.fmDateOfBirth = formData.get('fmDateOfBirth-' + el.fmNumbering);
            el.fmJobStatus = formData.get('fmJobStatus-' + el.fmNumbering);
            el.fmPhone = formData.get('fmPhone-' + el.fmNumbering);
        }

        for (let el of educations) {
            el.eduPlace = formData.get('eduPlace-' + el.eduNumbering);
            el.eduSchoolName = formData.get('eduSchoolName-' + el.eduNumbering);
            el.eduEnteredDate = formData.get('eduEnteredDate-' + el.eduNumbering);
            el.eduGraduatedDate = formData.get('eduGraduatedDate-' + el.eduNumbering);
            el.eduProfession = formData.get('eduProfession-' + el.eduNumbering);
            el.eduDegree = formData.get('eduDegree-' + el.eduNumbering);
            el.eduGPA = formData.get('eduGPA-' + el.eduNumbering);
        }

        for (let el of courses) {
            el.coSubject = formData.get('coSubject-' + el.coNumbering);
            el.coPlace = formData.get('coPlace-' + el.coNumbering);
            el.coDate = formData.get('coDate-' + el.coNumbering);
            el.coDuration = formData.get('coDuration-' + el.coNumbering);
            el.coDegreeNumber = formData.get('coDegreeNumber-' + el.coNumbering);
            el.coGPA = formData.get('coGPA-' + el.coNumbering);
        }

        for (let el of experiences) {
            el.expCompanyName = formData.get('expCompanyName-' + el.expNumbering);
            el.expWorks = formData.get('expWorks-' + el.expNumbering);
            el.expPosition = formData.get('expPosition-' + el.expNumbering);
            el.expStartDate = formData.get('expStartDate-' + el.expNumbering);
            el.expEndDate = formData.get('expEndDate-' + el.expNumbering);
            el.expSalary = formData.get('expSalary-' + el.expNumbering);
            el.expReasonOut = formData.get('expReasonOut-' + el.expNumbering);
        }

        for (let el of skills) {
            el.skillRate = formData.get('skillRate-' + el.skNumbering);
        }

        const personal = {
            advantages: formData.get('advantages'),
            disadvantages: formData.get('disadvantages'),
            goals: formData.get('goals')
        }
        let driveLicense = {}
        if (hasDriveLicense == "????????") {
            driveLicense = {
                driveLicenseName: driveLicenses,
                driveExp: formData.get('driveExp'),
                driveCarMark: formData.get('driveCarMark')
            }
        }


        const judgementStatus = formData.get('judgementStatus');
        let judgementDescription = {};
        if (judgementStatus == "????????") {
            judgementDescription = formData.get('judgementDescription')
        }


        for (let el of urgentCalls) {
            el.urgentCallsName = formData.get('urgentCallsName-' + el.urgentCallsNumbering);
            el.urgentCallsMember = formData.get('urgentCallsMember-' + el.urgentCallsNumbering);
            el.urgentCallsPhone = formData.get('urgentCallsPhone-' + el.urgentCallsNumbering);
        }

        let InputCV = {
            familyName: familyName,
            lastName: lastName,
            firstName: firstName,
            dateOfBirth: dateOfBirth,
            placeOfBirth: placeOfBirth,
            stateOfBirth: stateOfBirth,
            image: "",
            nationality: nationality,
            gender: gender,
            registerNumber: registerNumber,
            email: email,
            phone: phone,
            phoneHome: phoneHome,
            address: address,
            addressStatus: addressStatus,
            insurance1: insurance1,
            insurance2: insurance2,
            jobInterested: jobInterested,
            salaryWant: salaryWant,
            marriageStatus: marriageStatus,
            expYears: expYears,
            jobless: jobless,
            familyMembers: familyMembers,
            educations: educations,
            courses: courses,
            experiences: experiences,
            skills: skills,
            hasDriveLicense: hasDriveLicense,
            driveLicense: driveLicense,
            personal: personal,
            judgementStatus: judgementStatus,
            judgementDescription: judgementDescription,
            urgentCalls: urgentCalls
        }

        axios.post('http://localhost:30002/api/upload', portrait, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(function (response) {
            console.log(response, 'response!')
        }).catch(function (error) {
            console.log(error);
        });


        // insertCV({
        //     variables: { InputCV }
        // }).then((res) => {
        //     console.log(res, 'res1')
        //     setTimeout(() => {
        //         setSubmitting(false);
        //         form.reset();
        //         if (res.data.insertCV.error == false) {
        //             router.push('/cv-confirmed')
        //         }
        //     }, 1000)
        // }, (err) => {
        //     console.log(err, "?????????? ????????????!")
        //     setTimeout(() => {
        //         setSubmitting(false)
        //         // form.reset()
        //     }, 1000)

        // })
    }

    return (
        <Fragment>
            <div className="container">
                <form method="post" onSubmit={() => handleSubmit(event)}>
                    <h5>??????. ?????????????? ????????????????</h5>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="familyName">???????????? ????????:</label>
                            <input type="text" name="familyName" className="form-control" id="familyName" aria-describedby="???????????? ????????" placeholder="???????????? ????????" />
                            <small className="form-text text-muted">?????????? ????: ????????????????...</small>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="lastName">???????? (????)-?????? ??????:</label>
                            <input type="text" name="lastName" className="form-control" id="lastName" aria-describedby="????????" placeholder="???????? (????)-?????? ??????" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstName">???????????? ??????:</label>
                            <input type="text" name="firstName" className="form-control" id="firstName" aria-describedby="??????" placeholder="???????????? ??????" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="dateOfBirth">???????????? ??????????:</label><br />
                            <input type="date" name="dateOfBirth" className="form-control" id="dateOfBirth" aria-describedby="???????????? ??????????" />
                            {/* <Datepicker className="form-control" dateFormat="yyyy/MM/dd" placeholderText='DD/MM/YYYY' selected={dateOfBirth}></Datepicker> */}
                            <small className="form-text text-muted">?????????? ????: 12/31/1971</small>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="placeOfBirth">???????????? ??????????, ??????:</label>
                            <select name="placeOfBirth" className="form-control">
                                <option defaultValue>??????????????????????</option>
                                <option value="????????????????">????????????????</option>
                                <option value="????????">????????-??????????</option>
                                <option value="????????????????????">????????????????????</option>
                                <option value="????????????">????????????</option>
                                <option value="????????">????????-??????????</option>
                                <option value="????????????????????">????????????????????</option>
                                <option value="????????????">????????????-??????</option>
                                <option value="??????????????????">??????????????????</option>
                                <option value="????????????">????????????</option>
                                <option value="????????????????">????????????????</option>
                                <option value="????????????">????????????</option>
                                <option value="??????????">??????????</option>
                                <option value="????????????????????">????????????????????</option>
                                <option value="????????????????">????????????????</option>
                                <option value="??????????????????">??????????????????</option>
                                <option value="??????????????">??????????????</option>
                                <option value="??????">??????</option>
                                <option value="??????">??????</option>
                                <option value="????????">????????</option>
                                <option value="??????????????">??????????????</option>
                                <option value="????????????">????????????</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="stateOfBirth">???????????? ??????, ????????????:</label>
                            <input type="text" name="stateOfBirth" className="form-control" id="stateOfBirth" aria-describedby="???????????? ??????, ????????????" placeholder="???????????? ??????, ????????????" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="nationality">???? ??????????:</label>
                            <input type="text" name="nationality" className="form-control" id="nationality" aria-describedby="???? ??????????" placeholder="???? ??????????" />
                            <small className="form-text text-muted">?????????? ????: ????????...</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <div>
                                <label>????????:</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="gMale" name="gender" value="??????????????" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="gMale">??????????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="gFemale" name="gender" value="??????????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="gFemale">??????????????</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="portrait">???????? ?????????? (?????????????? 3 ???????? ???????????????????? ?????????? ????????):</label>
                            <input type="file" name="portrait" className="form-control-file" id="portrait" />
                            <small className="form-text text-muted">???????????? ???????????? ???????? ?????????????????? ???????????????? ???????????? ???????????????????????? ???????????? ???????? ???? 1MB ?????????????? ?????????????????? .JPEG, .PNG ???????????????? ???????????? ???????????????? ????.</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="registerNumber">???????????????????? ???:</label>
                            <input type="text" name="registerNumber" className="form-control" id="registerNumber" aria-describedby="?????????????????????? ????????????" placeholder="???????????????????? ???" />
                            <small className="form-text text-muted">?????????? ????: ????00000000</small>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="email">??-???????? ????????:</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="??-????????" placeholder="??-???????? ????????" />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="phone">???????????????? ???????? (??????):</label>
                            <input type="text" name="phone" className="form-control" id="phone" aria-describedby="???????????????? ???????? (??????)" placeholder="???????????????? ???????? (??????)" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="phoneHome">???????????????? ???????? (??????):</label>
                            <input type="text" name="phoneHome" className="form-control" id="phoneHome" aria-describedby="???????????????? ???????? (??????)" placeholder="???????????????? ???????? (??????)" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="address">?????????? ???????????? ????????:</label>
                            <input type="text" name="address" className="form-control" id="address" aria-describedby="?????????? ???????????? ????????" placeholder="?????????? ???????????? ????????" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="address-private" name="addressStatus" value="????????????" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="address-private">????????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="address-rent" name="addressStatus" value="??????????????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="address-rent">??????????????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="address-parents" name="addressStatus" value="????????/???? ???????????????? ??????????????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="address-parents">????????/???? ???????????????? ??????????????????</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <div>
                                <label htmlFor="gender">???????????????? ?????????????????? ?????????????????? ????????:</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="insurance1-yes" name="insurance1" value="????????" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="insurance1-yes">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="insurance1-no" name="insurance1" value="????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="insurance1-no">????????</label>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div>
                                <label htmlFor="gender">?????????? ?????????????? ?????????????????? ?????????????????? ????????:</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="insurance2-yes" name="insurance2" value="????????" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="insurance2-yes">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="insurance2-no" name="insurance2" value="????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="insurance2-no">????????</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="job-interested">???????? ???????????????? ?????? ?????????? ????????:</label>
                            <input type="text" name="jobInterested" className="form-control" id="job-interested" aria-describedby="???????? ???????????????? ?????? ?????????? ????????" placeholder="???????? ???????????????? ?????? ?????????? ????????" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="salary-want">???????? ?????????? ?????? ??????????:</label>
                            <input type="text" name="salaryWant" className="form-control" id="salary-want" aria-describedby="???????? ?????????? ?????? ??????????" placeholder="???????? ?????????? ?????? ??????????" />
                        </div>
                    </div>

                    <h5>????????. ?????? ???????????? ????????????</h5>

                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <div>
                                <label htmlFor="gender">???????????????? ????????:</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="marriage-yes" name="marriageStatus" value="????????" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="marriage-yes">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="marriage-no" name="marriageStatus" value="????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="marriage-no">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="marriage-divorce" name="marriageStatus" value="?????????????????? ????????????????????" className="custom-control-input" />
                                <label className="custom-control-label font-16" htmlFor="marriage-divorce">?????????????????? ????????????????????</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div>
                                <label htmlFor="gender">?????? ???????????? ???????????? (???? ???????? ?????? ?????????????? ?????? ???????? ???? ???????? ???????????? ?????????????????? ??????????):</label>
                            </div>
                            <div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">???</th>
                                            <th scope="col">???????? ??????</th>
                                            <th scope="col">???????? ???? ??????????</th>
                                            <th scope="col">???????????? ????</th>
                                            <th scope="col">?????????? ???????? ???????? ???????????? /?????????? ??????????, ?????????? ???????????? (????????????????) ???????????????? ?????????? ????/</th>
                                            <th scope="col">???????????? ?????????? ????????</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            familyMembers.map((el, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{el.fmNumbering}</th>
                                                    <td>
                                                        <input type="text" name={'fmNames-' + el.fmNumbering} className="form-control" id={'fmNames-' + el.fmNumbering} aria-describedby='fmNames' />
                                                    </td>
                                                    <td>
                                                        <input type="text" name={'fmMember-' + el.fmNumbering} className="form-control" id={'fmMember-' + el.fmNumbering} aria-describedby='fmMember' />
                                                    </td>
                                                    <td>
                                                        <select name={'fmDateOfBirth-' + el.fmNumbering} className="form-control mr-2">
                                                            {
                                                                YEARS.map((el, index) => (
                                                                    <option key={'year-' + index} value={el}> {el} </option>
                                                                ))
                                                            }
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <textarea name={'fmJobStatus-' + el.fmNumbering} className="form-control" id={'fmJobStatus-' + el.fmNumbering} rows="3"></textarea>
                                                    </td>
                                                    <td>
                                                        <input type="text" name={'fmPhone-' + el.fmNumbering} className="form-control" id={'fmPhone-' + el.fmNumbering} aria-describedby='fmPhone' />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h5>??????????. ?????????????????????? ????????????</h5>
                    <div>(?????????????? ?????????????????? ?????????? ???? ???????? ????????????????)</div>

                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">???</th>
                                        <th scope="col">??????????</th>
                                        <th scope="col">???????????????????? ??????</th>
                                        <th scope="col">???????????? ??????????</th>
                                        <th scope="col">?????????????? ??????????</th>
                                        <th scope="col">???????????????? ????????????????</th>
                                        <th scope="col">??????????, ??????</th>
                                        <th scope="col">???????? ??????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        educations.map((el, index) => (
                                            <tr key={'eduKey-' + el.eduNumbering}>
                                                <th scope="row">1</th>
                                                <td>
                                                    <input type="text" name={'eduPlace-' + el.eduNumbering} className="form-control" id={'eduPlace-' + el.eduNumbering} aria-describedby={'eduPlace-' + el.eduNumbering} />
                                                </td>
                                                <td>
                                                    <input type="text" name={'eduSchoolName-' + el.eduNumbering} className="form-control" id={'eduSchoolName-' + el.eduNumbering} aria-describedby={'eduSchoolName-' + el.eduNumbering} />
                                                </td>
                                                <td>
                                                    <select name={'eduEnteredDate-' + el.eduNumbering} className="form-control mr-2">
                                                        {
                                                            YEARS.map((el, index) => (
                                                                <option key={'year-' + index} value={el}> {el} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name={'eduGraduatedDate-' + el.eduNumbering} className="form-control mr-2">
                                                        {
                                                            YEARS.map((el, index) => (
                                                                <option key={'year-' + index} value={el}> {el} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="text" name={'eduProfession-' + el.eduNumbering} className="form-control" id={'eduProfession-' + el.eduNumbering} aria-describedby={'eduProfession-' + el.eduNumbering} />
                                                </td>
                                                <td>
                                                    <select name={'eduDegree-' + el.eduNumbering} className="form-control">
                                                        <option value="0" defaultValue>????????</option>
                                                        <option value="1">?????????? ?????? ????????</option>
                                                        <option value="2">?????????? ????????</option>
                                                        <option value="3">????????????????</option>
                                                        <option value="3">??????????????</option>
                                                        <option value="3">????????????</option>
                                                        <option value="3">?????? ??????????????????</option>
                                                        <option value="3">??????????????????</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="text" name={'eduGPA-' + el.eduNumbering} className="form-control" id={'eduGPA-' + el.eduNumbering} aria-describedby={'eduGPA-' + el.eduNumbering} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <h5>??????????. ???????????????????? ???????????????????? ????????????</h5>
                    <div>(???????????????????? ?????????? ???????????? ??????????????, ?????????????? ?????????? ????????????????????, ?????????? ???????????????????? ???????????????????? ??.??)</div>

                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">???</th>
                                        <th scope="col">???????? ????????????, ??????????????</th>
                                        <th scope="col">?????????? ???????? ????????????????????????</th>
                                        <th scope="col">??????????</th>
                                        <th scope="col">???????? ??????????????????????</th>
                                        <th scope="col">????????????????????, ???????????????????????? ???</th>
                                        <th scope="col">??????????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courses.map((el, index) => (
                                            <tr key={'co-' + index}>
                                                <th scope="row">{el.coNumbering}</th>
                                                <td>
                                                    <input type="text" name={'coSubject-' + el.coNumbering} className="form-control" id={'coSubject-' + el.coNumbering} aria-describedby={'coSubject-' + el.coNumbering} />
                                                </td>
                                                <td>
                                                    <input type="text" name={'coPlace-' + el.coNumbering} className="form-control" id={'coPlace-' + el.coNumbering} aria-describedby={'coPlace-' + el.coNumbering} />
                                                </td>
                                                <td>
                                                    <select name={'coDate-' + el.coNumbering} className="form-control mr-2">
                                                        {
                                                            YEARS.map((el, index) => (
                                                                <option key={'year-' + index} value={el}> {el} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="text" name={'coDuration-' + el.coNumbering} className="form-control" id={'coDuration-' + el.coNumbering} aria-describedby={'coDuration-' + el.coNumbering} />
                                                </td>
                                                <td>
                                                    <input type="text" name={'coDegreeNumber-' + el.coNumbering} className="form-control" id={'coDegreeNumber-' + el.coNumbering} aria-describedby={'coDegreeNumber-' + el.coNumbering} />
                                                </td>
                                                <td>
                                                    <input type="text" name={'coGPA-' + el.coNumbering} className="form-control" id={'coGPA-' + el.coNumbering} aria-describedby={'coGPA-' + el.coNumbering} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <h5>??????. ?????????? ?????????????? ????????????????</h5>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">???</th>
                                        <th scope="col">???????????????????????? ?????? (??/??-???? ????????????)</th>
                                        <th scope="col">???????? ?????????????????????? ???????? ??????????????</th>
                                        <th scope="col">?????????? ????????????</th>
                                        <th scope="col">?????????? ??????????</th>
                                        <th scope="col">???????????? ??????????</th>
                                        <th scope="col">?????????????????? ????????????</th>
                                        <th scope="col">???????????? ????????????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        experiences.map((el, index) => (
                                            <tr key={'exp-' + el.expNumbering}>
                                                <th scope="row">{el.expNumbering}</th>
                                                <td>
                                                    <textarea className="form-control" name={'expCompanyName-' + el.expNumbering} id={'expCompanyName-' + el.expNumbering} rows="3"></textarea>
                                                </td>
                                                <td>
                                                    <textarea className="form-control" name={'expWorks-' + el.expNumbering} id={'expWorks-' + el.expNumbering} rows="3"></textarea>
                                                </td>
                                                <td>
                                                    <input type="text" name={'expPosition-' + el.expNumbering} className="form-control" id={'expPosition-' + el.expNumbering} aria-describedby="?????????? ????????????" />
                                                </td>
                                                <td>
                                                    <select name={'expStartDate-' + el.expNumbering} className="form-control mr-2">
                                                        {
                                                            YEARS.map((el, index) => (
                                                                <option key={'year-' + index} value={el}> {el} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name={'expEndDate-' + el.expNumbering} className="form-control mr-2">
                                                        {
                                                            YEARS.map((el, index) => (
                                                                <option key={'year-' + index} value={el}> {el} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="number" name={'expSalary-' + el.expNumbering} className="form-control" id={'expSalary-' + el.expNumbering} aria-describedby={'expSalary-' + el.expNumbering} />
                                                </td>
                                                <td>
                                                    <textarea name={'expReasonOut-' + el.expNumbering} className="form-control" id={'expReasonOut-' + el.expNumbering} rows="3"></textarea>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td colSpan="5" className="font-16">???????????????? ?????????????? ????????, ?????????? ?????????????????? ??????</td>
                                        <td colSpan="3">
                                            <input type="text" name="expYears" className="form-control" id="expYears" aria-describedby="expYears" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="5" className="font-16">?????????? ???? ?????????? ?????????????????????? ???????? ?????????????????? ?????? ???????????????????? ?????????? ????</td>
                                        <td colSpan="3">
                                            <textarea name="jobless" className="form-control" id="jobless" rows="3"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h5>????????????. ???? ????????????</h5>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">???</th>
                                        <th scope="col">???? ???????????????? ????????????</th>
                                        <th scope="col">?????? ????????</th>
                                        <th scope="col">??????????????????</th>
                                        <th scope="col">???????? ??????????</th>
                                        <th scope="col">????????????????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        skills.map((el, index) => (
                                            <tr key={'skill-' + el.skNumbering}>
                                                <th scope="row">{el.skNumbering}</th>
                                                <td>
                                                    {el.skillName}
                                                </td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id={'excellent-' + el.skNumbering} name={'skillRate-' + el.skNumbering} value="?????? ????????" className="custom-control-input" defaultChecked />
                                                        <label className="custom-control-label font-16" htmlFor={'excellent-' + el.skNumbering}></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id={'good-' + el.skNumbering} name={'skillRate-' + el.skNumbering} value="??????????????????" className="custom-control-input" />
                                                        <label className="custom-control-label font-16" htmlFor={'good-' + el.skNumbering}></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id={'average-' + el.skNumbering} name={'skillRate-' + el.skNumbering} value="???????? ??????????" className="custom-control-input" />
                                                        <label className="custom-control-label font-16" htmlFor={'average-' + el.skNumbering}></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id={'poor-' + el.skNumbering} name={'skillRate-' + el.skNumbering} value="????????????????????" className="custom-control-input" />
                                                        <label className="custom-control-label font-16" htmlFor={'poor-' + el.skNumbering}></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div>
                                <label>?????????????? ???????????????????? ????????:</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="driveLicense-yes" name="hasDriveLicense" value="????????" className="custom-control-input" defaultChecked onChange={handleHasDriveLicense} />
                                <label className="custom-control-label font-16" htmlFor="driveLicense-yes">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="driveLicense-no" name="hasDriveLicense" value="????????" className="custom-control-input" onChange={handleHasDriveLicense} />
                                <label className="custom-control-label font-16" htmlFor="driveLicense-no">????????</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3" hidden={!hasDriveLicense}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">??????????????</th>
                                        <th scope="col">?????????? ?????? ?????????? ?????????? ???????????? ?????</th>
                                        <th scope="col">???? ?????????????? ???????????????? ????? ???????????? ????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseA" value="A" onChange={handleDriveLicenseInput} /> A
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseB" value="B" onChange={handleDriveLicenseInput} /> B
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseC" value="C" onChange={handleDriveLicenseInput} /> C
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseD" value="D" onChange={handleDriveLicenseInput} /> D
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseE" value="E" onChange={handleDriveLicenseInput} /> E
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label font-16">
                                                    <input className="form-check-input" type="checkbox" name="driveLicenseName[]" id="licenseM" value="M" onChange={handleDriveLicenseInput} /> M
                                            </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" name="driveExp" className="form-control" id="driveExp" aria-describedby="driveExp" />
                                        </td>
                                        <td>
                                            <input type="text" name="driveCarMark" className="form-control" id="driveCarMark" aria-describedby="driveCarMark" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h5>??????????. ???????????? ????????????</h5>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div>
                                <label>???? ?????????? ?????????? ?????? ??????, ???????????????? ???????????????? ?????????? ????</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">???????? ?????????? ??????</th>
                                        <th scope="col">???????? ?????? ??????</th>
                                        <th scope="col">???????? ???????????????? ??????????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <textarea className="form-control" name="advantages" id="advantages" rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className="form-control" name="disadvantages" id="disadvantages" rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className="form-control" name="goals" id="goals" rows="5"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div>
                                <label>???? ??????????????:</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="judgement-yes" name="judgementStatus" value="????????" className="custom-control-input" onChange={handleJudgement} defaultChecked />
                                <label className="custom-control-label font-16" htmlFor="judgement-yes">????????</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="judgement-no" name="judgementStatus" value="????????" className="custom-control-input" onChange={handleJudgement} />
                                <label className="custom-control-label font-16" htmlFor="judgement-no">????????</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div hidden={!judgementStatus}>
                                <label>?????????? ???????? ?????? ???????? ???????????? ???????????? ?????????????????????? ????</label>
                                <textarea className="form-control" name="judgementDescription" id="judgementDescription" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div>
                                <label>???????????????? ???????????????????? ???????????????? ?????????? ???????????? ???????????? ?????????? ???? (???????? ?????? ???? 2 ?????? ???????????? ???????????????? ????)</label>
                            </div>
                            <div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>???</th>
                                            <th scope="col">??????</th>
                                            <th scope="col">???????? ???? ??????????</th>
                                            <th scope="col">???????????? ????????????</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            urgentCalls.map((el, index) => (
                                                <tr key={'urgent-' + el.urgentCallsNumbering}>
                                                    <th scope="row">{el.urgentCallsNumbering}</th>
                                                    <td>
                                                        <input type="text" name={'urgentCallsName-' + el.urgentCallsNumbering} className="form-control" id={'urgentCallsName-' + el.urgentCallsNumbering} aria-describedby={'urgentCallsName-' + el.urgentCallsNumbering} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name={'urgentCallsMember-' + el.urgentCallsNumbering} className="form-control" id={'urgentCallsMember-' + el.urgentCallsNumbering} aria-describedby={'urgentCallsMember-' + el.urgentCallsNumbering} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name={'urgentCallsPhone-' + el.urgentCallsNumbering} className="form-control" id={'urgentCallsPhone-' + el.urgentCallsNumbering} aria-describedby={'urgentCallsPhone-' + el.urgentCallsNumbering} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p>???????? ?????????? ???????????? ???????????? ???????????? ???????????????? ???????????? ?????????????? ?????? ?????????????? ?????? ???? ?????????????? ?????????????????? ???????? ???????? ?????????? ???????????????????? ?????????????????? ??????????.</p>

                    <div className="text-center">
                        {/* <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only">Loading...</span>
                        </button> */}
                        <button className="btn cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-bgcolor-skincolor" type="submit">
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ?????????? ????????????
                        </button>
                    </div>
                </form>
            </div>
        </Fragment >
    )
}

export const YEARS = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
    1969,
    1968,
    1967,
    1966,
    1965,
    1964,
    1963,
    1962,
    1961,
    1960,
    1959,
    1958,
    1957,
    1956,
    1955,
    1954,
    1953,
    1952,
    1951,
    1950,
    1949,
    1948,
    1947,
    1946,
    1945,
    1944,
    1943,
    1942,
    1941,
    1940,
    1939,
    1938,
    1937,
    1936,
    1935,
    1934,
    1933,
    1932,
    1931,
    1930,
    1929,
    1928,
    1927,
    1926,
    1925,
    1924,
    1923,
    1922,
    1921,
    1920,
    1919,
    1918,
    1917,
    1916,
    1915,
    1914,
    1913,
    1912,
    1911,
    1910,
    1909,
    1908,
    1907,
    1906,
    1905,
    1904,
    1903,
    1902,
    1901,
    1900
]