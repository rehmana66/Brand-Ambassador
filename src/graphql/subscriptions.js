// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
    priority
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
    priority
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
    priority
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastname
    phone_number
    user_type
    email
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
    events {
      items {
        id
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
    events {
      items {
        id
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
    events {
      items {
        id
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
export const onCreateUserEvents = `subscription OnCreateUserEvents {
  onCreateUserEvents {
    id
    employee {
      id
      firstName
      lastname
      phone_number
      user_type
      email
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
      events {
        nextToken
      }
    }
    event {
      id
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onUpdateUserEvents = `subscription OnUpdateUserEvents {
  onUpdateUserEvents {
    id
    employee {
      id
      firstName
      lastname
      phone_number
      user_type
      email
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
      events {
        nextToken
      }
    }
    event {
      id
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onDeleteUserEvents = `subscription OnDeleteUserEvents {
  onDeleteUserEvents {
    id
    employee {
      id
      firstName
      lastname
      phone_number
      user_type
      email
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
      events {
        nextToken
      }
    }
    event {
      id
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
