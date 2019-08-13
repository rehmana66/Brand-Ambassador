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
    shifts {
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
    shifts {
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
    shifts {
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
    id
    employer_id
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
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
    id
    employer_id
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
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
    id
    employer_id
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const onCreateUserShifts = `subscription OnCreateUserShifts {
  onCreateUserShifts {
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const onUpdateUserShifts = `subscription OnUpdateUserShifts {
  onUpdateUserShifts {
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const onDeleteUserShifts = `subscription OnDeleteUserShifts {
  onDeleteUserShifts {
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
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const onCreateShift = `subscription OnCreateShift {
  onCreateShift {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateShift = `subscription OnUpdateShift {
  onUpdateShift {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteShift = `subscription OnDeleteShift {
  onDeleteShift {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
