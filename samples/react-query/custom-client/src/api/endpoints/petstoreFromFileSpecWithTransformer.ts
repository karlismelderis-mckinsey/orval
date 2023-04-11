/**
 * Generated by orval v6.14.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from 'react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from 'react-query';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from '../model';
import { useCustomClient } from '../mutator/custom-client';
import type { ErrorType, BodyType } from '../mutator/custom-client';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
  const listPets = useCustomClient<Pets>();

  return (params?: ListPetsParams, version = 1, signal?: AbortSignal) => {
    return listPets({
      url: `/v${version}/pets`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getListPetsQueryKey = (params?: ListPetsParams, version = 1) =>
  [`/v${version}/pets`, ...(params ? [params] : [])] as const;

export const useListPetsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const listPets = useListPetsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
  > = ({ signal }) => listPets(params, version, signal);

  return { queryKey, queryFn, enabled: !!version, ...queryOptions };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
>;
export type ListPetsQueryError = ErrorType<Error>;

export const useListPets = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
  const createPets = useCustomClient<Pet>();

  return (createPetsBody: BodyType<CreatePetsBody>, version = 1) => {
    return createPets({
      url: `/v${version}/pets`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createPetsBody,
    });
  };
};

export const useCreatePetsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: BodyType<CreatePetsBody>; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const createPets = useCreatePetsHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    { data: BodyType<CreatePetsBody>; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>
>;
export type CreatePetsMutationBody = BodyType<CreatePetsBody>;
export type CreatePetsMutationError = ErrorType<Error>;

export const useCreatePets = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}) => {
  const mutationOptions = useCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
  const showPetById = useCustomClient<Pet>();

  return (petId: string, version = 1, signal?: AbortSignal) => {
    return showPetById({
      url: `/v${version}/pets/${petId}`,
      method: 'get',
      signal,
    });
  };
};

export const getShowPetByIdQueryKey = (petId: string, version = 1) =>
  [`/v${version}/pets/${petId}`] as const;

export const useShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const showPetById = useShowPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
  > = ({ signal }) => showPetById(petId, version, signal);

  return { queryKey, queryFn, enabled: !!(version && petId), ...queryOptions };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
>;
export type ShowPetByIdQueryError = ErrorType<Error>;

export const useShowPetById = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
