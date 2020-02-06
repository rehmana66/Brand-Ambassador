// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    fullName
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
        user
        job
        status
        date
      }
      nextToken
    }
    reviews {
      items {
        id
        employer_id
        user_id
        review
        rating
        date
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fullName
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
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getReviews = `query GetReviews($id: ID!) {
  getReviews(id: $id) {
    id
    employer_id
    user_id
    job {
      id
      employer {
        id
        fullName
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
      reviews {
        nextToken
      }
    }
    review
    rating
    date
  }
}
`;
export const listReviewss = `query ListReviewss(
  $filter: ModelReviewsFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviewss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      employer_id
      user_id
      job {
        id
        name
        date
      }
      review
      rating
      date
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    nextToken
  }
}
`;
export const getResume = `query GetResume($id: ID!) {
  getResume(id: $id) {
    id
    resume_key
  }
}
`;
export const listResumes = `query ListResumes(
  $filter: ModelResumeFilterInput
  $limit: Int
  $nextToken: String
) {
  listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      resume_key
    }
    nextToken
  }
}
`;
export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    employer {
      id
      fullName
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
      reviews {
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
        user
        job
        status
        date
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
    reviews {
      items {
        id
        employer_id
        user_id
        review
        rating
        date
      }
      nextToken
    }
  }
}
`;
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      employer {
        id
        fullName
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
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getJobSearch = `query GetJobSearch($id: ID!) {
  getJobSearch(id: $id) {
    id
    job {
      id
      employer {
        id
        fullName
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
      reviews {
        nextToken
      }
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
export const listJobSearchs = `query ListJobSearchs(
  $filter: ModelJobSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobSearchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      job {
        id
        name
        date
      }
      category {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      search {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getApplication = `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    id
    user
    job
    status
    date
    userID {
      id
      fullName
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
      reviews {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        fullName
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
      reviews {
        nextToken
      }
    }
  }
}
`;
export const listApplications = `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      job
      status
      date
      userID {
        id
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
      }
      jobID {
        id
        name
        date
      }
    }
    nextToken
  }
}
`;
export const getDetails = `query GetDetails($id: ID!) {
  getDetails(id: $id) {
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
export const listDetailss = `query ListDetailss(
  $filter: ModelDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getJobDates = `query GetJobDates($id: ID!) {
  getJobDates(id: $id) {
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
export const listJobDatess = `query ListJobDatess(
  $filter: ModelJobDatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobDatess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      details {
        id
        title
        body
        desc
        misc
        rate
      }
    }
    nextToken
  }
}
`;
