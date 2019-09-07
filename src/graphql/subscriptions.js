// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastName
    phone_number
    user_type
    email
    dateOfBirth
    gender
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    firstName
    lastName
    phone_number
    user_type
    email
    dateOfBirth
    gender
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    firstName
    lastName
    phone_number
    user_type
    email
    dateOfBirth
    gender
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const onCreateResume = `subscription OnCreateResume {
  onCreateResume {
    id
    resume_key
  }
}
`;
export const onUpdateResume = `subscription OnUpdateResume {
  onUpdateResume {
    id
    resume_key
  }
}
`;
export const onDeleteResume = `subscription OnDeleteResume {
  onDeleteResume {
    id
    resume_key
  }
}
`;
export const onCreateUserJobs = `subscription OnCreateUserJobs {
  onCreateUserJobs {
    id
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const onUpdateUserJobs = `subscription OnUpdateUserJobs {
  onUpdateUserJobs {
    id
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const onDeleteUserJobs = `subscription OnDeleteUserJobs {
  onDeleteUserJobs {
    id
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
    id
    employer {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    name
    employees {
      items {
        id
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
    id
    employer {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    name
    employees {
      items {
        id
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
    id
    employer {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    name
    employees {
      items {
        id
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const onCreateJobSearch = `subscription OnCreateJobSearch {
  onCreateJobSearch {
    id
    job {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
        nextToken
      }
    }
  }
}
`;
export const onUpdateJobSearch = `subscription OnUpdateJobSearch {
  onUpdateJobSearch {
    id
    job {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
        nextToken
      }
    }
  }
}
`;
export const onDeleteJobSearch = `subscription OnDeleteJobSearch {
  onDeleteJobSearch {
    id
    job {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
        nextToken
      }
    }
  }
}
`;
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
    id
    name
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
    id
    name
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
    id
    name
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateApplication = `subscription OnCreateApplication {
  onCreateApplication {
    id
    status
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const onUpdateApplication = `subscription OnUpdateApplication {
  onUpdateApplication {
    id
    status
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const onDeleteApplication = `subscription OnDeleteApplication {
  onDeleteApplication {
    id
    status
    userID {
      id
      firstName
      lastName
      phone_number
      user_type
      email
      dateOfBirth
      gender
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const onCreateDetails = `subscription OnCreateDetails {
  onCreateDetails {
    id
    title
    body
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const onUpdateDetails = `subscription OnUpdateDetails {
  onUpdateDetails {
    id
    title
    body
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const onDeleteDetails = `subscription OnDeleteDetails {
  onDeleteDetails {
    id
    title
    body
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const onCreateJobDates = `subscription OnCreateJobDates {
  onCreateJobDates {
    id
    date
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onUpdateJobDates = `subscription OnUpdateJobDates {
  onUpdateJobDates {
    id
    date
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onDeleteJobDates = `subscription OnDeleteJobDates {
  onDeleteJobDates {
    id
    date
    details {
      id
      title
      body
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      dates {
        nextToken
      }
    }
  }
}
`;
