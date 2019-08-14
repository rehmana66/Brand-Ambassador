// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
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
    lastname
    phone_number
    user_type
    email
    dateOfBirth
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
    lastname
    phone_number
    user_type
    email
    dateOfBirth
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
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
    }
  }
}
`;
export const onUpdateUserJobs = `subscription OnUpdateUserJobs {
  onUpdateUserJobs {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
    }
  }
}
`;
export const onDeleteUserJobs = `subscription OnDeleteUserJobs {
  onDeleteUserJobs {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
    }
  }
}
`;
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
    id
    employer {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
    id
    employer {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
    id
    employer {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
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
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
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
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
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
      lastname
      phone_number
      user_type
      email
      dateOfBirth
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
        lastname
        phone_number
        user_type
        email
        dateOfBirth
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
        desc
        misc
        rate
      }
    }
  }
}
`;
export const onCreateDetails = `subscription OnCreateDetails {
  onCreateDetails {
    id
    title
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
    category {
      items {
        id
        name
      }
      nextToken
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
    category {
      items {
        id
        name
      }
      nextToken
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
    category {
      items {
        id
        name
      }
      nextToken
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
      category {
        nextToken
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
      category {
        nextToken
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
      category {
        nextToken
      }
      dates {
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
    details {
      id
      title
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
    id
    name
    details {
      id
      title
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
    id
    name
    details {
      id
      title
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
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
