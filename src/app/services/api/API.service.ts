/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateVehicle: OnCreateVehicleSubscription;
  onUpdateVehicle: OnUpdateVehicleSubscription;
  onDeleteVehicle: OnDeleteVehicleSubscription;
};

export type CreateVehicleInput = {
  id?: string | null;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
};

export type ModelVehicleConditionInput = {
  vehicleName?: ModelStringInput | null;
  vehicleBrand?: ModelStringInput | null;
  chassisNumber?: ModelStringInput | null;
  registrationNumber?: ModelStringInput | null;
  indebtedUnit?: ModelStringInput | null;
  vehicleType?: ModelStringInput | null;
  vehiclePrice?: ModelIntInput | null;
  manufactureYear?: ModelIntInput | null;
  carMileage?: ModelIntInput | null;
  acc?: ModelStringInput | null;
  nextService?: ModelStringInput | null;
  servicePrice?: ModelIntInput | null;
  registeredBy?: ModelStringInput | null;
  registeredUntil?: ModelStringInput | null;
  registrationPrice?: ModelIntInput | null;
  insuranceName?: ModelStringInput | null;
  insuranceType?: ModelStringInput | null;
  insuranceBy?: ModelStringInput | null;
  insuranceUntil?: ModelStringInput | null;
  and?: Array<ModelVehicleConditionInput | null> | null;
  or?: Array<ModelVehicleConditionInput | null> | null;
  not?: ModelVehicleConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Vehicle = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVehicleInput = {
  id: string;
  vehicleName?: string | null;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice?: number | null;
  manufactureYear?: number | null;
  carMileage?: number | null;
  acc?: string | null;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
};

export type DeleteVehicleInput = {
  id: string;
};

export type ModelVehicleFilterInput = {
  id?: ModelIDInput | null;
  vehicleName?: ModelStringInput | null;
  vehicleBrand?: ModelStringInput | null;
  chassisNumber?: ModelStringInput | null;
  registrationNumber?: ModelStringInput | null;
  indebtedUnit?: ModelStringInput | null;
  vehicleType?: ModelStringInput | null;
  vehiclePrice?: ModelIntInput | null;
  manufactureYear?: ModelIntInput | null;
  carMileage?: ModelIntInput | null;
  acc?: ModelStringInput | null;
  nextService?: ModelStringInput | null;
  servicePrice?: ModelIntInput | null;
  registeredBy?: ModelStringInput | null;
  registeredUntil?: ModelStringInput | null;
  registrationPrice?: ModelIntInput | null;
  insuranceName?: ModelStringInput | null;
  insuranceType?: ModelStringInput | null;
  insuranceBy?: ModelStringInput | null;
  insuranceUntil?: ModelStringInput | null;
  and?: Array<ModelVehicleFilterInput | null> | null;
  or?: Array<ModelVehicleFilterInput | null> | null;
  not?: ModelVehicleFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelVehicleConnection = {
  __typename: "ModelVehicleConnection";
  items: Array<Vehicle | null>;
  nextToken?: string | null;
};

export type CreateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetVehicleQuery = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListVehiclesQuery = {
  __typename: "ModelVehicleConnection";
  items: Array<{
    __typename: "Vehicle";
    id: string;
    vehicleName: string;
    vehicleBrand?: string | null;
    chassisNumber?: string | null;
    registrationNumber?: string | null;
    indebtedUnit?: string | null;
    vehicleType?: string | null;
    vehiclePrice: number;
    manufactureYear?: number | null;
    carMileage: number;
    acc: string;
    nextService?: string | null;
    servicePrice?: number | null;
    registeredBy?: string | null;
    registeredUntil?: string | null;
    registrationPrice?: number | null;
    insuranceName?: string | null;
    insuranceType?: string | null;
    insuranceBy?: string | null;
    insuranceUntil?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  vehicleName: string;
  vehicleBrand?: string | null;
  chassisNumber?: string | null;
  registrationNumber?: string | null;
  indebtedUnit?: string | null;
  vehicleType?: string | null;
  vehiclePrice: number;
  manufactureYear?: number | null;
  carMileage: number;
  acc: string;
  nextService?: string | null;
  servicePrice?: number | null;
  registeredBy?: string | null;
  registeredUntil?: string | null;
  registrationPrice?: number | null;
  insuranceName?: string | null;
  insuranceType?: string | null;
  insuranceBy?: string | null;
  insuranceUntil?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVehicle(
    input: CreateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<CreateVehicleMutation> {
    const statement = `mutation CreateVehicle($input: CreateVehicleInput!, $condition: ModelVehicleConditionInput) {
        createVehicle(input: $input, condition: $condition) {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVehicleMutation>response.data.createVehicle;
  }
  async UpdateVehicle(
    input: UpdateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<UpdateVehicleMutation> {
    const statement = `mutation UpdateVehicle($input: UpdateVehicleInput!, $condition: ModelVehicleConditionInput) {
        updateVehicle(input: $input, condition: $condition) {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVehicleMutation>response.data.updateVehicle;
  }
  async DeleteVehicle(
    input: DeleteVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<DeleteVehicleMutation> {
    const statement = `mutation DeleteVehicle($input: DeleteVehicleInput!, $condition: ModelVehicleConditionInput) {
        deleteVehicle(input: $input, condition: $condition) {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVehicleMutation>response.data.deleteVehicle;
  }
  async GetVehicle(id: string): Promise<GetVehicleQuery> {
    const statement = `query GetVehicle($id: ID!) {
        getVehicle(id: $id) {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVehicleQuery>response.data.getVehicle;
  }
  async ListVehicles(
    filter?: ModelVehicleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVehiclesQuery> {
    const statement = `query ListVehicles($filter: ModelVehicleFilterInput, $limit: Int, $nextToken: String) {
        listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            vehicleName
            vehicleBrand
            chassisNumber
            registrationNumber
            indebtedUnit
            vehicleType
            vehiclePrice
            manufactureYear
            carMileage
            acc
            nextService
            servicePrice
            registeredBy
            registeredUntil
            registrationPrice
            insuranceName
            insuranceType
            insuranceBy
            insuranceUntil
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVehiclesQuery>response.data.listVehicles;
  }
  OnCreateVehicleListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVehicle {
        onCreateVehicle {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
  >;

  OnUpdateVehicleListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVehicle {
        onUpdateVehicle {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
  >;

  OnDeleteVehicleListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVehicle {
        onDeleteVehicle {
          __typename
          id
          vehicleName
          vehicleBrand
          chassisNumber
          registrationNumber
          indebtedUnit
          vehicleType
          vehiclePrice
          manufactureYear
          carMileage
          acc
          nextService
          servicePrice
          registeredBy
          registeredUntil
          registrationPrice
          insuranceName
          insuranceType
          insuranceBy
          insuranceUntil
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
  >;
}
