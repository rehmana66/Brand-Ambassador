/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    LocationID
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
    LocationID
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
    LocationID
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
    ResumeID
    resume_key
  }
}
`;
export const onUpdateResume = `subscription OnUpdateResume {
  onUpdateResume {
    ResumeID
    resume_key
  }
}
`;
export const onDeleteResume = `subscription OnDeleteResume {
  onDeleteResume {
    ResumeID
    resume_key
  }
}
`;
export const onCreateUserJobs = `subscription OnCreateUserJobs {
  onCreateUserJobs {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onUpdateUserJobs = `subscription OnUpdateUserJobs {
  onUpdateUserJobs {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onDeleteUserJobs = `subscription OnDeleteUserJobs {
  onDeleteUserJobs {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const onCreateUserPosting = `subscription OnCreateUserPosting {
  onCreateUserPosting {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const onUpdateUserPosting = `subscription OnUpdateUserPosting {
  onUpdateUserPosting {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const onDeleteUserPosting = `subscription OnDeleteUserPosting {
  onDeleteUserPosting {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const onCreatePosting = `subscription OnCreatePosting {
  onCreatePosting {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const onUpdatePosting = `subscription OnUpdatePosting {
  onUpdatePosting {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const onDeletePosting = `subscription OnDeletePosting {
  onDeletePosting {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const onCreateApplication = `subscription OnCreateApplication {
  onCreateApplication {
    applicationID
    status
  }
}
`;
export const onUpdateApplication = `subscription OnUpdateApplication {
  onUpdateApplication {
    applicationID
    status
  }
}
`;
export const onDeleteApplication = `subscription OnDeleteApplication {
  onDeleteApplication {
    applicationID
    status
  }
}
`;
