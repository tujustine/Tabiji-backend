
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripCollaborator
 * 
 */
export type TripCollaborator = $Result.DefaultSelection<Prisma.$TripCollaboratorPayload>
/**
 * Model Memory
 * 
 */
export type Memory = $Result.DefaultSelection<Prisma.$MemoryPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model PlaceData
 * 
 */
export type PlaceData = $Result.DefaultSelection<Prisma.$PlaceDataPayload>
/**
 * Model TodoItem
 * 
 */
export type TodoItem = $Result.DefaultSelection<Prisma.$TodoItemPayload>
/**
 * Model DaySchedule
 * 
 */
export type DaySchedule = $Result.DefaultSelection<Prisma.$DaySchedulePayload>
/**
 * Model ShareLink
 * 
 */
export type ShareLink = $Result.DefaultSelection<Prisma.$ShareLinkPayload>
/**
 * Model UserFavoriteTrip
 * 
 */
export type UserFavoriteTrip = $Result.DefaultSelection<Prisma.$UserFavoriteTripPayload>
/**
 * Model UserRecentTrip
 * 
 */
export type UserRecentTrip = $Result.DefaultSelection<Prisma.$UserRecentTripPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CollaboratorRole: {
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type CollaboratorRole = (typeof CollaboratorRole)[keyof typeof CollaboratorRole]

}

export type CollaboratorRole = $Enums.CollaboratorRole

export const CollaboratorRole: typeof $Enums.CollaboratorRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripCollaborator`: Exposes CRUD operations for the **TripCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripCollaborators
    * const tripCollaborators = await prisma.tripCollaborator.findMany()
    * ```
    */
  get tripCollaborator(): Prisma.TripCollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memory`: Exposes CRUD operations for the **Memory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memories
    * const memories = await prisma.memory.findMany()
    * ```
    */
  get memory(): Prisma.MemoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placeData`: Exposes CRUD operations for the **PlaceData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaceData
    * const placeData = await prisma.placeData.findMany()
    * ```
    */
  get placeData(): Prisma.PlaceDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todoItem`: Exposes CRUD operations for the **TodoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoItems
    * const todoItems = await prisma.todoItem.findMany()
    * ```
    */
  get todoItem(): Prisma.TodoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daySchedule`: Exposes CRUD operations for the **DaySchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DaySchedules
    * const daySchedules = await prisma.daySchedule.findMany()
    * ```
    */
  get daySchedule(): Prisma.DayScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareLink`: Exposes CRUD operations for the **ShareLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareLinks
    * const shareLinks = await prisma.shareLink.findMany()
    * ```
    */
  get shareLink(): Prisma.ShareLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavoriteTrip`: Exposes CRUD operations for the **UserFavoriteTrip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavoriteTrips
    * const userFavoriteTrips = await prisma.userFavoriteTrip.findMany()
    * ```
    */
  get userFavoriteTrip(): Prisma.UserFavoriteTripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRecentTrip`: Exposes CRUD operations for the **UserRecentTrip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRecentTrips
    * const userRecentTrips = await prisma.userRecentTrip.findMany()
    * ```
    */
  get userRecentTrip(): Prisma.UserRecentTripDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Trip: 'Trip',
    TripCollaborator: 'TripCollaborator',
    Memory: 'Memory',
    Media: 'Media',
    PlaceData: 'PlaceData',
    TodoItem: 'TodoItem',
    DaySchedule: 'DaySchedule',
    ShareLink: 'ShareLink',
    UserFavoriteTrip: 'UserFavoriteTrip',
    UserRecentTrip: 'UserRecentTrip'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trip" | "tripCollaborator" | "memory" | "media" | "placeData" | "todoItem" | "daySchedule" | "shareLink" | "userFavoriteTrip" | "userRecentTrip"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripCollaborator: {
        payload: Prisma.$TripCollaboratorPayload<ExtArgs>
        fields: Prisma.TripCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.TripCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          findMany: {
            args: Prisma.TripCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          create: {
            args: Prisma.TripCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          createMany: {
            args: Prisma.TripCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.TripCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          update: {
            args: Prisma.TripCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.TripCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripCollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.TripCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.TripCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripCollaborator>
          }
          groupBy: {
            args: Prisma.TripCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<TripCollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Memory: {
        payload: Prisma.$MemoryPayload<ExtArgs>
        fields: Prisma.MemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          findFirst: {
            args: Prisma.MemoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          findMany: {
            args: Prisma.MemoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          create: {
            args: Prisma.MemoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          createMany: {
            args: Prisma.MemoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          delete: {
            args: Prisma.MemoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          update: {
            args: Prisma.MemoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          deleteMany: {
            args: Prisma.MemoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          upsert: {
            args: Prisma.MemoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          aggregate: {
            args: Prisma.MemoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemory>
          }
          groupBy: {
            args: Prisma.MemoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      PlaceData: {
        payload: Prisma.$PlaceDataPayload<ExtArgs>
        fields: Prisma.PlaceDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          findFirst: {
            args: Prisma.PlaceDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          findMany: {
            args: Prisma.PlaceDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>[]
          }
          create: {
            args: Prisma.PlaceDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          createMany: {
            args: Prisma.PlaceDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>[]
          }
          delete: {
            args: Prisma.PlaceDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          update: {
            args: Prisma.PlaceDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          deleteMany: {
            args: Prisma.PlaceDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>[]
          }
          upsert: {
            args: Prisma.PlaceDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          aggregate: {
            args: Prisma.PlaceDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaceData>
          }
          groupBy: {
            args: Prisma.PlaceDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceDataCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceDataCountAggregateOutputType> | number
          }
        }
      }
      TodoItem: {
        payload: Prisma.$TodoItemPayload<ExtArgs>
        fields: Prisma.TodoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          findFirst: {
            args: Prisma.TodoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          findMany: {
            args: Prisma.TodoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>[]
          }
          create: {
            args: Prisma.TodoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          createMany: {
            args: Prisma.TodoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>[]
          }
          delete: {
            args: Prisma.TodoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          update: {
            args: Prisma.TodoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          deleteMany: {
            args: Prisma.TodoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>[]
          }
          upsert: {
            args: Prisma.TodoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoItemPayload>
          }
          aggregate: {
            args: Prisma.TodoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodoItem>
          }
          groupBy: {
            args: Prisma.TodoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoItemCountArgs<ExtArgs>
            result: $Utils.Optional<TodoItemCountAggregateOutputType> | number
          }
        }
      }
      DaySchedule: {
        payload: Prisma.$DaySchedulePayload<ExtArgs>
        fields: Prisma.DayScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          findFirst: {
            args: Prisma.DayScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          findMany: {
            args: Prisma.DayScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>[]
          }
          create: {
            args: Prisma.DayScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          createMany: {
            args: Prisma.DayScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>[]
          }
          delete: {
            args: Prisma.DayScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          update: {
            args: Prisma.DayScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          deleteMany: {
            args: Prisma.DayScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>[]
          }
          upsert: {
            args: Prisma.DayScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySchedulePayload>
          }
          aggregate: {
            args: Prisma.DayScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaySchedule>
          }
          groupBy: {
            args: Prisma.DayScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<DayScheduleCountAggregateOutputType> | number
          }
        }
      }
      ShareLink: {
        payload: Prisma.$ShareLinkPayload<ExtArgs>
        fields: Prisma.ShareLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findFirst: {
            args: Prisma.ShareLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findMany: {
            args: Prisma.ShareLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          create: {
            args: Prisma.ShareLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          createMany: {
            args: Prisma.ShareLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          delete: {
            args: Prisma.ShareLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          update: {
            args: Prisma.ShareLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShareLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShareLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          aggregate: {
            args: Prisma.ShareLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareLink>
          }
          groupBy: {
            args: Prisma.ShareLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkCountAggregateOutputType> | number
          }
        }
      }
      UserFavoriteTrip: {
        payload: Prisma.$UserFavoriteTripPayload<ExtArgs>
        fields: Prisma.UserFavoriteTripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteTripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteTripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteTripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteTripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          findMany: {
            args: Prisma.UserFavoriteTripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>[]
          }
          create: {
            args: Prisma.UserFavoriteTripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          createMany: {
            args: Prisma.UserFavoriteTripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteTripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteTripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          update: {
            args: Prisma.UserFavoriteTripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteTripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteTripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavoriteTripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>[]
          }
          upsert: {
            args: Prisma.UserFavoriteTripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoriteTripPayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteTripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavoriteTrip>
          }
          groupBy: {
            args: Prisma.UserFavoriteTripGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteTripGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteTripCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteTripCountAggregateOutputType> | number
          }
        }
      }
      UserRecentTrip: {
        payload: Prisma.$UserRecentTripPayload<ExtArgs>
        fields: Prisma.UserRecentTripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRecentTripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRecentTripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          findFirst: {
            args: Prisma.UserRecentTripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRecentTripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          findMany: {
            args: Prisma.UserRecentTripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>[]
          }
          create: {
            args: Prisma.UserRecentTripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          createMany: {
            args: Prisma.UserRecentTripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRecentTripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>[]
          }
          delete: {
            args: Prisma.UserRecentTripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          update: {
            args: Prisma.UserRecentTripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          deleteMany: {
            args: Prisma.UserRecentTripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRecentTripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRecentTripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>[]
          }
          upsert: {
            args: Prisma.UserRecentTripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentTripPayload>
          }
          aggregate: {
            args: Prisma.UserRecentTripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRecentTrip>
          }
          groupBy: {
            args: Prisma.UserRecentTripGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRecentTripGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRecentTripCountArgs<ExtArgs>
            result: $Utils.Optional<UserRecentTripCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trip?: TripOmit
    tripCollaborator?: TripCollaboratorOmit
    memory?: MemoryOmit
    media?: MediaOmit
    placeData?: PlaceDataOmit
    todoItem?: TodoItemOmit
    daySchedule?: DayScheduleOmit
    shareLink?: ShareLinkOmit
    userFavoriteTrip?: UserFavoriteTripOmit
    userRecentTrip?: UserRecentTripOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tripsOwned: number
    collaborations: number
    favoriteTrips: number
    recentTrips: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripsOwned?: boolean | UserCountOutputTypeCountTripsOwnedArgs
    collaborations?: boolean | UserCountOutputTypeCountCollaborationsArgs
    favoriteTrips?: boolean | UserCountOutputTypeCountFavoriteTripsArgs
    recentTrips?: boolean | UserCountOutputTypeCountRecentTripsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteTripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecentTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentTripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    memories: number
    places: number
    todoItems: number
    daySchedules: number
    collaborators: number
    shareLinks: number
    favoritedBy: number
    viewedBy: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | TripCountOutputTypeCountMemoriesArgs
    places?: boolean | TripCountOutputTypeCountPlacesArgs
    todoItems?: boolean | TripCountOutputTypeCountTodoItemsArgs
    daySchedules?: boolean | TripCountOutputTypeCountDaySchedulesArgs
    collaborators?: boolean | TripCountOutputTypeCountCollaboratorsArgs
    shareLinks?: boolean | TripCountOutputTypeCountShareLinksArgs
    favoritedBy?: boolean | TripCountOutputTypeCountFavoritedByArgs
    viewedBy?: boolean | TripCountOutputTypeCountViewedByArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceDataWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTodoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoItemWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDaySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayScheduleWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountShareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteTripWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountViewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentTripWhereInput
  }


  /**
   * Count Type MemoryCountOutputType
   */

  export type MemoryCountOutputType = {
    media: number
  }

  export type MemoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MemoryCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * MemoryCountOutputType without action
   */
  export type MemoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCountOutputType
     */
    select?: MemoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemoryCountOutputType without action
   */
  export type MemoryCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    token: string | null
    salt: string | null
    hash: string | null
    admin: boolean | null
    profilePhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    token: string | null
    salt: string | null
    hash: string | null
    admin: boolean | null
    profilePhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    token: number
    salt: number
    hash: number
    admin: number
    profilePhoto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    token?: true
    salt?: true
    hash?: true
    admin?: true
    profilePhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    token?: true
    salt?: true
    hash?: true
    admin?: true
    profilePhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    token?: true
    salt?: true
    hash?: true
    admin?: true
    profilePhoto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin: boolean
    profilePhoto: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    token?: boolean
    salt?: boolean
    hash?: boolean
    admin?: boolean
    profilePhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripsOwned?: boolean | User$tripsOwnedArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    favoriteTrips?: boolean | User$favoriteTripsArgs<ExtArgs>
    recentTrips?: boolean | User$recentTripsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    token?: boolean
    salt?: boolean
    hash?: boolean
    admin?: boolean
    profilePhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    token?: boolean
    salt?: boolean
    hash?: boolean
    admin?: boolean
    profilePhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    token?: boolean
    salt?: boolean
    hash?: boolean
    admin?: boolean
    profilePhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "token" | "salt" | "hash" | "admin" | "profilePhoto" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripsOwned?: boolean | User$tripsOwnedArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    favoriteTrips?: boolean | User$favoriteTripsArgs<ExtArgs>
    recentTrips?: boolean | User$recentTripsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tripsOwned: Prisma.$TripPayload<ExtArgs>[]
      collaborations: Prisma.$TripCollaboratorPayload<ExtArgs>[]
      favoriteTrips: Prisma.$UserFavoriteTripPayload<ExtArgs>[]
      recentTrips: Prisma.$UserRecentTripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      token: string
      salt: string
      hash: string
      admin: boolean
      profilePhoto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripsOwned<T extends User$tripsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborations<T extends User$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteTrips<T extends User$favoriteTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recentTrips<T extends User$recentTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$recentTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly profilePhoto: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tripsOwned
   */
  export type User$tripsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.collaborations
   */
  export type User$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    cursor?: TripCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * User.favoriteTrips
   */
  export type User$favoriteTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    where?: UserFavoriteTripWhereInput
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    cursor?: UserFavoriteTripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteTripScalarFieldEnum | UserFavoriteTripScalarFieldEnum[]
  }

  /**
   * User.recentTrips
   */
  export type User$recentTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    where?: UserRecentTripWhereInput
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    cursor?: UserRecentTripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRecentTripScalarFieldEnum | UserRecentTripScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    image: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    image: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    image: number
    participants: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    image?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    image?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    image?: true
    participants?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    title: string
    startDate: Date
    endDate: Date
    image: string | null
    participants: string[]
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    image?: boolean
    participants?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memories?: boolean | Trip$memoriesArgs<ExtArgs>
    places?: boolean | Trip$placesArgs<ExtArgs>
    todoItems?: boolean | Trip$todoItemsArgs<ExtArgs>
    daySchedules?: boolean | Trip$daySchedulesArgs<ExtArgs>
    collaborators?: boolean | Trip$collaboratorsArgs<ExtArgs>
    shareLinks?: boolean | Trip$shareLinksArgs<ExtArgs>
    favoritedBy?: boolean | Trip$favoritedByArgs<ExtArgs>
    viewedBy?: boolean | Trip$viewedByArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    image?: boolean
    participants?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    image?: boolean
    participants?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    image?: boolean
    participants?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "startDate" | "endDate" | "image" | "participants" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memories?: boolean | Trip$memoriesArgs<ExtArgs>
    places?: boolean | Trip$placesArgs<ExtArgs>
    todoItems?: boolean | Trip$todoItemsArgs<ExtArgs>
    daySchedules?: boolean | Trip$daySchedulesArgs<ExtArgs>
    collaborators?: boolean | Trip$collaboratorsArgs<ExtArgs>
    shareLinks?: boolean | Trip$shareLinksArgs<ExtArgs>
    favoritedBy?: boolean | Trip$favoritedByArgs<ExtArgs>
    viewedBy?: boolean | Trip$viewedByArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      memories: Prisma.$MemoryPayload<ExtArgs>[]
      places: Prisma.$PlaceDataPayload<ExtArgs>[]
      todoItems: Prisma.$TodoItemPayload<ExtArgs>[]
      daySchedules: Prisma.$DaySchedulePayload<ExtArgs>[]
      collaborators: Prisma.$TripCollaboratorPayload<ExtArgs>[]
      shareLinks: Prisma.$ShareLinkPayload<ExtArgs>[]
      favoritedBy: Prisma.$UserFavoriteTripPayload<ExtArgs>[]
      viewedBy: Prisma.$UserRecentTripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startDate: Date
      endDate: Date
      image: string | null
      participants: string[]
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memories<T extends Trip$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    places<T extends Trip$placesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todoItems<T extends Trip$todoItemsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$todoItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daySchedules<T extends Trip$daySchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$daySchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Trip$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareLinks<T extends Trip$shareLinksArgs<ExtArgs> = {}>(args?: Subset<T, Trip$shareLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritedBy<T extends Trip$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Trip$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedBy<T extends Trip$viewedByArgs<ExtArgs> = {}>(args?: Subset<T, Trip$viewedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly image: FieldRef<"Trip", 'String'>
    readonly participants: FieldRef<"Trip", 'String[]'>
    readonly ownerId: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.memories
   */
  export type Trip$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    where?: MemoryWhereInput
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    cursor?: MemoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Trip.places
   */
  export type Trip$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    where?: PlaceDataWhereInput
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    cursor?: PlaceDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * Trip.todoItems
   */
  export type Trip$todoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    where?: TodoItemWhereInput
    orderBy?: TodoItemOrderByWithRelationInput | TodoItemOrderByWithRelationInput[]
    cursor?: TodoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoItemScalarFieldEnum | TodoItemScalarFieldEnum[]
  }

  /**
   * Trip.daySchedules
   */
  export type Trip$daySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    where?: DayScheduleWhereInput
    orderBy?: DayScheduleOrderByWithRelationInput | DayScheduleOrderByWithRelationInput[]
    cursor?: DayScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScheduleScalarFieldEnum | DayScheduleScalarFieldEnum[]
  }

  /**
   * Trip.collaborators
   */
  export type Trip$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    cursor?: TripCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * Trip.shareLinks
   */
  export type Trip$shareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    cursor?: ShareLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * Trip.favoritedBy
   */
  export type Trip$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    where?: UserFavoriteTripWhereInput
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    cursor?: UserFavoriteTripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteTripScalarFieldEnum | UserFavoriteTripScalarFieldEnum[]
  }

  /**
   * Trip.viewedBy
   */
  export type Trip$viewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    where?: UserRecentTripWhereInput
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    cursor?: UserRecentTripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRecentTripScalarFieldEnum | UserRecentTripScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripCollaborator
   */

  export type AggregateTripCollaborator = {
    _count: TripCollaboratorCountAggregateOutputType | null
    _min: TripCollaboratorMinAggregateOutputType | null
    _max: TripCollaboratorMaxAggregateOutputType | null
  }

  export type TripCollaboratorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    role: $Enums.CollaboratorRole | null
    createdAt: Date | null
  }

  export type TripCollaboratorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    role: $Enums.CollaboratorRole | null
    createdAt: Date | null
  }

  export type TripCollaboratorCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    role: number
    createdAt: number
    _all: number
  }


  export type TripCollaboratorMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    role?: true
    createdAt?: true
  }

  export type TripCollaboratorMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    role?: true
    createdAt?: true
  }

  export type TripCollaboratorCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type TripCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripCollaborator to aggregate.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripCollaborators
    **/
    _count?: true | TripCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripCollaboratorMaxAggregateInputType
  }

  export type GetTripCollaboratorAggregateType<T extends TripCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateTripCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripCollaborator[P]>
      : GetScalarType<T[P], AggregateTripCollaborator[P]>
  }




  export type TripCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithAggregationInput | TripCollaboratorOrderByWithAggregationInput[]
    by: TripCollaboratorScalarFieldEnum[] | TripCollaboratorScalarFieldEnum
    having?: TripCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCollaboratorCountAggregateInputType | true
    _min?: TripCollaboratorMinAggregateInputType
    _max?: TripCollaboratorMaxAggregateInputType
  }

  export type TripCollaboratorGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    role: $Enums.CollaboratorRole
    createdAt: Date
    _count: TripCollaboratorCountAggregateOutputType | null
    _min: TripCollaboratorMinAggregateOutputType | null
    _max: TripCollaboratorMaxAggregateOutputType | null
  }

  type GetTripCollaboratorGroupByPayload<T extends TripCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], TripCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type TripCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type TripCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "role" | "createdAt", ExtArgs["result"]["tripCollaborator"]>
  export type TripCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripCollaborator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      role: $Enums.CollaboratorRole
      createdAt: Date
    }, ExtArgs["result"]["tripCollaborator"]>
    composites: {}
  }

  type TripCollaboratorGetPayload<S extends boolean | null | undefined | TripCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$TripCollaboratorPayload, S>

  type TripCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCollaboratorCountAggregateInputType | true
    }

  export interface TripCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripCollaborator'], meta: { name: 'TripCollaborator' } }
    /**
     * Find zero or one TripCollaborator that matches the filter.
     * @param {TripCollaboratorFindUniqueArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripCollaboratorFindUniqueArgs>(args: SelectSubset<T, TripCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, TripCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindFirstArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripCollaboratorFindFirstArgs>(args?: SelectSubset<T, TripCollaboratorFindFirstArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindFirstOrThrowArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, TripCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripCollaborators
     * const tripCollaborators = await prisma.tripCollaborator.findMany()
     * 
     * // Get first 10 TripCollaborators
     * const tripCollaborators = await prisma.tripCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripCollaboratorFindManyArgs>(args?: SelectSubset<T, TripCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripCollaborator.
     * @param {TripCollaboratorCreateArgs} args - Arguments to create a TripCollaborator.
     * @example
     * // Create one TripCollaborator
     * const TripCollaborator = await prisma.tripCollaborator.create({
     *   data: {
     *     // ... data to create a TripCollaborator
     *   }
     * })
     * 
     */
    create<T extends TripCollaboratorCreateArgs>(args: SelectSubset<T, TripCollaboratorCreateArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripCollaborators.
     * @param {TripCollaboratorCreateManyArgs} args - Arguments to create many TripCollaborators.
     * @example
     * // Create many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCollaboratorCreateManyArgs>(args?: SelectSubset<T, TripCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripCollaborators and returns the data saved in the database.
     * @param {TripCollaboratorCreateManyAndReturnArgs} args - Arguments to create many TripCollaborators.
     * @example
     * // Create many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripCollaborators and only return the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripCollaborator.
     * @param {TripCollaboratorDeleteArgs} args - Arguments to delete one TripCollaborator.
     * @example
     * // Delete one TripCollaborator
     * const TripCollaborator = await prisma.tripCollaborator.delete({
     *   where: {
     *     // ... filter to delete one TripCollaborator
     *   }
     * })
     * 
     */
    delete<T extends TripCollaboratorDeleteArgs>(args: SelectSubset<T, TripCollaboratorDeleteArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripCollaborator.
     * @param {TripCollaboratorUpdateArgs} args - Arguments to update one TripCollaborator.
     * @example
     * // Update one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripCollaboratorUpdateArgs>(args: SelectSubset<T, TripCollaboratorUpdateArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripCollaborators.
     * @param {TripCollaboratorDeleteManyArgs} args - Arguments to filter TripCollaborators to delete.
     * @example
     * // Delete a few TripCollaborators
     * const { count } = await prisma.tripCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripCollaboratorDeleteManyArgs>(args?: SelectSubset<T, TripCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripCollaboratorUpdateManyArgs>(args: SelectSubset<T, TripCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripCollaborators and returns the data updated in the database.
     * @param {TripCollaboratorUpdateManyAndReturnArgs} args - Arguments to update many TripCollaborators.
     * @example
     * // Update many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripCollaborators and only return the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripCollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, TripCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripCollaborator.
     * @param {TripCollaboratorUpsertArgs} args - Arguments to update or create a TripCollaborator.
     * @example
     * // Update or create a TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.upsert({
     *   create: {
     *     // ... data to create a TripCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends TripCollaboratorUpsertArgs>(args: SelectSubset<T, TripCollaboratorUpsertArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorCountArgs} args - Arguments to filter TripCollaborators to count.
     * @example
     * // Count the number of TripCollaborators
     * const count = await prisma.tripCollaborator.count({
     *   where: {
     *     // ... the filter for the TripCollaborators we want to count
     *   }
     * })
    **/
    count<T extends TripCollaboratorCountArgs>(
      args?: Subset<T, TripCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripCollaboratorAggregateArgs>(args: Subset<T, TripCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetTripCollaboratorAggregateType<T>>

    /**
     * Group by TripCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: TripCollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripCollaborator model
   */
  readonly fields: TripCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripCollaborator model
   */
  interface TripCollaboratorFieldRefs {
    readonly id: FieldRef<"TripCollaborator", 'String'>
    readonly userId: FieldRef<"TripCollaborator", 'String'>
    readonly tripId: FieldRef<"TripCollaborator", 'String'>
    readonly role: FieldRef<"TripCollaborator", 'CollaboratorRole'>
    readonly createdAt: FieldRef<"TripCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripCollaborator findUnique
   */
  export type TripCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator findUniqueOrThrow
   */
  export type TripCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator findFirst
   */
  export type TripCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripCollaborators.
     */
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator findFirstOrThrow
   */
  export type TripCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripCollaborators.
     */
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator findMany
   */
  export type TripCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborators to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator create
   */
  export type TripCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a TripCollaborator.
     */
    data: XOR<TripCollaboratorCreateInput, TripCollaboratorUncheckedCreateInput>
  }

  /**
   * TripCollaborator createMany
   */
  export type TripCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripCollaborators.
     */
    data: TripCollaboratorCreateManyInput | TripCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripCollaborator createManyAndReturn
   */
  export type TripCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many TripCollaborators.
     */
    data: TripCollaboratorCreateManyInput | TripCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripCollaborator update
   */
  export type TripCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a TripCollaborator.
     */
    data: XOR<TripCollaboratorUpdateInput, TripCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which TripCollaborator to update.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator updateMany
   */
  export type TripCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripCollaborators.
     */
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which TripCollaborators to update
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to update.
     */
    limit?: number
  }

  /**
   * TripCollaborator updateManyAndReturn
   */
  export type TripCollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update TripCollaborators.
     */
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which TripCollaborators to update
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripCollaborator upsert
   */
  export type TripCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the TripCollaborator to update in case it exists.
     */
    where: TripCollaboratorWhereUniqueInput
    /**
     * In case the TripCollaborator found by the `where` argument doesn't exist, create a new TripCollaborator with this data.
     */
    create: XOR<TripCollaboratorCreateInput, TripCollaboratorUncheckedCreateInput>
    /**
     * In case the TripCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripCollaboratorUpdateInput, TripCollaboratorUncheckedUpdateInput>
  }

  /**
   * TripCollaborator delete
   */
  export type TripCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which TripCollaborator to delete.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator deleteMany
   */
  export type TripCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripCollaborators to delete
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to delete.
     */
    limit?: number
  }

  /**
   * TripCollaborator without action
   */
  export type TripCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model Memory
   */

  export type AggregateMemory = {
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  export type MemoryAvgAggregateOutputType = {
    zIndex: number | null
  }

  export type MemorySumAggregateOutputType = {
    zIndex: number | null
  }

  export type MemoryMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: string | null
    content: string | null
    zIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: string | null
    content: string | null
    zIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryCountAggregateOutputType = {
    id: number
    tripId: number
    type: number
    content: number
    position: number
    size: number
    zIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemoryAvgAggregateInputType = {
    zIndex?: true
  }

  export type MemorySumAggregateInputType = {
    zIndex?: true
  }

  export type MemoryMinAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    content?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryMaxAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    content?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryCountAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    content?: true
    position?: true
    size?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memory to aggregate.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memories
    **/
    _count?: true | MemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryMaxAggregateInputType
  }

  export type GetMemoryAggregateType<T extends MemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemory[P]>
      : GetScalarType<T[P], AggregateMemory[P]>
  }




  export type MemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryWhereInput
    orderBy?: MemoryOrderByWithAggregationInput | MemoryOrderByWithAggregationInput[]
    by: MemoryScalarFieldEnum[] | MemoryScalarFieldEnum
    having?: MemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryCountAggregateInputType | true
    _avg?: MemoryAvgAggregateInputType
    _sum?: MemorySumAggregateInputType
    _min?: MemoryMinAggregateInputType
    _max?: MemoryMaxAggregateInputType
  }

  export type MemoryGroupByOutputType = {
    id: string
    tripId: string
    type: string
    content: string
    position: JsonValue
    size: JsonValue
    zIndex: number
    createdAt: Date
    updatedAt: Date
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  type GetMemoryGroupByPayload<T extends MemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryGroupByOutputType[P]>
        }
      >
    >


  export type MemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    content?: boolean
    position?: boolean
    size?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    media?: boolean | Memory$mediaArgs<ExtArgs>
    _count?: boolean | MemoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    content?: boolean
    position?: boolean
    size?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    content?: boolean
    position?: boolean
    size?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectScalar = {
    id?: boolean
    tripId?: boolean
    type?: boolean
    content?: boolean
    position?: boolean
    size?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "type" | "content" | "position" | "size" | "zIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["memory"]>
  export type MemoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    media?: boolean | Memory$mediaArgs<ExtArgs>
    _count?: boolean | MemoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type MemoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $MemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Memory"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      type: string
      content: string
      position: Prisma.JsonValue
      size: Prisma.JsonValue
      zIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memory"]>
    composites: {}
  }

  type MemoryGetPayload<S extends boolean | null | undefined | MemoryDefaultArgs> = $Result.GetResult<Prisma.$MemoryPayload, S>

  type MemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoryCountAggregateInputType | true
    }

  export interface MemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Memory'], meta: { name: 'Memory' } }
    /**
     * Find zero or one Memory that matches the filter.
     * @param {MemoryFindUniqueArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryFindUniqueArgs>(args: SelectSubset<T, MemoryFindUniqueArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemoryFindUniqueOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindFirstArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryFindFirstArgs>(args?: SelectSubset<T, MemoryFindFirstArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindFirstOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memories
     * const memories = await prisma.memory.findMany()
     * 
     * // Get first 10 Memories
     * const memories = await prisma.memory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryWithIdOnly = await prisma.memory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryFindManyArgs>(args?: SelectSubset<T, MemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memory.
     * @param {MemoryCreateArgs} args - Arguments to create a Memory.
     * @example
     * // Create one Memory
     * const Memory = await prisma.memory.create({
     *   data: {
     *     // ... data to create a Memory
     *   }
     * })
     * 
     */
    create<T extends MemoryCreateArgs>(args: SelectSubset<T, MemoryCreateArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memories.
     * @param {MemoryCreateManyArgs} args - Arguments to create many Memories.
     * @example
     * // Create many Memories
     * const memory = await prisma.memory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryCreateManyArgs>(args?: SelectSubset<T, MemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memories and returns the data saved in the database.
     * @param {MemoryCreateManyAndReturnArgs} args - Arguments to create many Memories.
     * @example
     * // Create many Memories
     * const memory = await prisma.memory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memories and only return the `id`
     * const memoryWithIdOnly = await prisma.memory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Memory.
     * @param {MemoryDeleteArgs} args - Arguments to delete one Memory.
     * @example
     * // Delete one Memory
     * const Memory = await prisma.memory.delete({
     *   where: {
     *     // ... filter to delete one Memory
     *   }
     * })
     * 
     */
    delete<T extends MemoryDeleteArgs>(args: SelectSubset<T, MemoryDeleteArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memory.
     * @param {MemoryUpdateArgs} args - Arguments to update one Memory.
     * @example
     * // Update one Memory
     * const memory = await prisma.memory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryUpdateArgs>(args: SelectSubset<T, MemoryUpdateArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memories.
     * @param {MemoryDeleteManyArgs} args - Arguments to filter Memories to delete.
     * @example
     * // Delete a few Memories
     * const { count } = await prisma.memory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryDeleteManyArgs>(args?: SelectSubset<T, MemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memories
     * const memory = await prisma.memory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryUpdateManyArgs>(args: SelectSubset<T, MemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memories and returns the data updated in the database.
     * @param {MemoryUpdateManyAndReturnArgs} args - Arguments to update many Memories.
     * @example
     * // Update many Memories
     * const memory = await prisma.memory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memories and only return the `id`
     * const memoryWithIdOnly = await prisma.memory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Memory.
     * @param {MemoryUpsertArgs} args - Arguments to update or create a Memory.
     * @example
     * // Update or create a Memory
     * const memory = await prisma.memory.upsert({
     *   create: {
     *     // ... data to create a Memory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memory we want to update
     *   }
     * })
     */
    upsert<T extends MemoryUpsertArgs>(args: SelectSubset<T, MemoryUpsertArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCountArgs} args - Arguments to filter Memories to count.
     * @example
     * // Count the number of Memories
     * const count = await prisma.memory.count({
     *   where: {
     *     // ... the filter for the Memories we want to count
     *   }
     * })
    **/
    count<T extends MemoryCountArgs>(
      args?: Subset<T, MemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoryAggregateArgs>(args: Subset<T, MemoryAggregateArgs>): Prisma.PrismaPromise<GetMemoryAggregateType<T>>

    /**
     * Group by Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryGroupByArgs['orderBy'] }
        : { orderBy?: MemoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Memory model
   */
  readonly fields: MemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Memory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Memory$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Memory$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Memory model
   */
  interface MemoryFieldRefs {
    readonly id: FieldRef<"Memory", 'String'>
    readonly tripId: FieldRef<"Memory", 'String'>
    readonly type: FieldRef<"Memory", 'String'>
    readonly content: FieldRef<"Memory", 'String'>
    readonly position: FieldRef<"Memory", 'Json'>
    readonly size: FieldRef<"Memory", 'Json'>
    readonly zIndex: FieldRef<"Memory", 'Int'>
    readonly createdAt: FieldRef<"Memory", 'DateTime'>
    readonly updatedAt: FieldRef<"Memory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Memory findUnique
   */
  export type MemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory findUniqueOrThrow
   */
  export type MemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory findFirst
   */
  export type MemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memories.
     */
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory findFirstOrThrow
   */
  export type MemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memories.
     */
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory findMany
   */
  export type MemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memories to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory create
   */
  export type MemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Memory.
     */
    data: XOR<MemoryCreateInput, MemoryUncheckedCreateInput>
  }

  /**
   * Memory createMany
   */
  export type MemoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memories.
     */
    data: MemoryCreateManyInput | MemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Memory createManyAndReturn
   */
  export type MemoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * The data used to create many Memories.
     */
    data: MemoryCreateManyInput | MemoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memory update
   */
  export type MemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Memory.
     */
    data: XOR<MemoryUpdateInput, MemoryUncheckedUpdateInput>
    /**
     * Choose, which Memory to update.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory updateMany
   */
  export type MemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memories.
     */
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyInput>
    /**
     * Filter which Memories to update
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to update.
     */
    limit?: number
  }

  /**
   * Memory updateManyAndReturn
   */
  export type MemoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * The data used to update Memories.
     */
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyInput>
    /**
     * Filter which Memories to update
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memory upsert
   */
  export type MemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Memory to update in case it exists.
     */
    where: MemoryWhereUniqueInput
    /**
     * In case the Memory found by the `where` argument doesn't exist, create a new Memory with this data.
     */
    create: XOR<MemoryCreateInput, MemoryUncheckedCreateInput>
    /**
     * In case the Memory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryUpdateInput, MemoryUncheckedUpdateInput>
  }

  /**
   * Memory delete
   */
  export type MemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter which Memory to delete.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory deleteMany
   */
  export type MemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memories to delete
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to delete.
     */
    limit?: number
  }

  /**
   * Memory.media
   */
  export type Memory$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Memory without action
   */
  export type MemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    provider: string | null
    publicId: string | null
    memoryId: string | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    provider: string | null
    publicId: string | null
    memoryId: string | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    provider: number
    publicId: number
    memoryId: number
    createdAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    provider?: true
    publicId?: true
    memoryId?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    provider?: true
    publicId?: true
    memoryId?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    provider?: true
    publicId?: true
    memoryId?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    url: string
    provider: string | null
    publicId: string | null
    memoryId: string
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    provider?: boolean
    publicId?: boolean
    memoryId?: boolean
    createdAt?: boolean
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    provider?: boolean
    publicId?: boolean
    memoryId?: boolean
    createdAt?: boolean
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    provider?: boolean
    publicId?: boolean
    memoryId?: boolean
    createdAt?: boolean
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    url?: boolean
    provider?: boolean
    publicId?: boolean
    memoryId?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "provider" | "publicId" | "memoryId" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      memory: Prisma.$MemoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      provider: string | null
      publicId: string | null
      memoryId: string
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memory<T extends MemoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemoryDefaultArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly provider: FieldRef<"Media", 'String'>
    readonly publicId: FieldRef<"Media", 'String'>
    readonly memoryId: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model PlaceData
   */

  export type AggregatePlaceData = {
    _count: PlaceDataCountAggregateOutputType | null
    _min: PlaceDataMinAggregateOutputType | null
    _max: PlaceDataMaxAggregateOutputType | null
  }

  export type PlaceDataMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    name: string | null
    address: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PlaceDataMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    name: string | null
    address: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PlaceDataCountAggregateOutputType = {
    id: number
    tripId: number
    name: number
    address: number
    coordinates: number
    category: number
    description: number
    createdAt: number
    _all: number
  }


  export type PlaceDataMinAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    address?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type PlaceDataMaxAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    address?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type PlaceDataCountAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    address?: true
    coordinates?: true
    category?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type PlaceDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceData to aggregate.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaceData
    **/
    _count?: true | PlaceDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceDataMaxAggregateInputType
  }

  export type GetPlaceDataAggregateType<T extends PlaceDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaceData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaceData[P]>
      : GetScalarType<T[P], AggregatePlaceData[P]>
  }




  export type PlaceDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceDataWhereInput
    orderBy?: PlaceDataOrderByWithAggregationInput | PlaceDataOrderByWithAggregationInput[]
    by: PlaceDataScalarFieldEnum[] | PlaceDataScalarFieldEnum
    having?: PlaceDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceDataCountAggregateInputType | true
    _min?: PlaceDataMinAggregateInputType
    _max?: PlaceDataMaxAggregateInputType
  }

  export type PlaceDataGroupByOutputType = {
    id: string
    tripId: string
    name: string
    address: string | null
    coordinates: JsonValue | null
    category: string | null
    description: string | null
    createdAt: Date
    _count: PlaceDataCountAggregateOutputType | null
    _min: PlaceDataMinAggregateOutputType | null
    _max: PlaceDataMaxAggregateOutputType | null
  }

  type GetPlaceDataGroupByPayload<T extends PlaceDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceDataGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceDataGroupByOutputType[P]>
        }
      >
    >


  export type PlaceDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    address?: boolean
    coordinates?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeData"]>

  export type PlaceDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    address?: boolean
    coordinates?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeData"]>

  export type PlaceDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    address?: boolean
    coordinates?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeData"]>

  export type PlaceDataSelectScalar = {
    id?: boolean
    tripId?: boolean
    name?: boolean
    address?: boolean
    coordinates?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type PlaceDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "name" | "address" | "coordinates" | "category" | "description" | "createdAt", ExtArgs["result"]["placeData"]>
  export type PlaceDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type PlaceDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type PlaceDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $PlaceDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaceData"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      name: string
      address: string | null
      coordinates: Prisma.JsonValue | null
      category: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["placeData"]>
    composites: {}
  }

  type PlaceDataGetPayload<S extends boolean | null | undefined | PlaceDataDefaultArgs> = $Result.GetResult<Prisma.$PlaceDataPayload, S>

  type PlaceDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceDataCountAggregateInputType | true
    }

  export interface PlaceDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaceData'], meta: { name: 'PlaceData' } }
    /**
     * Find zero or one PlaceData that matches the filter.
     * @param {PlaceDataFindUniqueArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceDataFindUniqueArgs>(args: SelectSubset<T, PlaceDataFindUniqueArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaceData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceDataFindUniqueOrThrowArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindFirstArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceDataFindFirstArgs>(args?: SelectSubset<T, PlaceDataFindFirstArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaceData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindFirstOrThrowArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaceData
     * const placeData = await prisma.placeData.findMany()
     * 
     * // Get first 10 PlaceData
     * const placeData = await prisma.placeData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeDataWithIdOnly = await prisma.placeData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceDataFindManyArgs>(args?: SelectSubset<T, PlaceDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaceData.
     * @param {PlaceDataCreateArgs} args - Arguments to create a PlaceData.
     * @example
     * // Create one PlaceData
     * const PlaceData = await prisma.placeData.create({
     *   data: {
     *     // ... data to create a PlaceData
     *   }
     * })
     * 
     */
    create<T extends PlaceDataCreateArgs>(args: SelectSubset<T, PlaceDataCreateArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaceData.
     * @param {PlaceDataCreateManyArgs} args - Arguments to create many PlaceData.
     * @example
     * // Create many PlaceData
     * const placeData = await prisma.placeData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceDataCreateManyArgs>(args?: SelectSubset<T, PlaceDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaceData and returns the data saved in the database.
     * @param {PlaceDataCreateManyAndReturnArgs} args - Arguments to create many PlaceData.
     * @example
     * // Create many PlaceData
     * const placeData = await prisma.placeData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaceData and only return the `id`
     * const placeDataWithIdOnly = await prisma.placeData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaceData.
     * @param {PlaceDataDeleteArgs} args - Arguments to delete one PlaceData.
     * @example
     * // Delete one PlaceData
     * const PlaceData = await prisma.placeData.delete({
     *   where: {
     *     // ... filter to delete one PlaceData
     *   }
     * })
     * 
     */
    delete<T extends PlaceDataDeleteArgs>(args: SelectSubset<T, PlaceDataDeleteArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaceData.
     * @param {PlaceDataUpdateArgs} args - Arguments to update one PlaceData.
     * @example
     * // Update one PlaceData
     * const placeData = await prisma.placeData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceDataUpdateArgs>(args: SelectSubset<T, PlaceDataUpdateArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaceData.
     * @param {PlaceDataDeleteManyArgs} args - Arguments to filter PlaceData to delete.
     * @example
     * // Delete a few PlaceData
     * const { count } = await prisma.placeData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDataDeleteManyArgs>(args?: SelectSubset<T, PlaceDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaceData
     * const placeData = await prisma.placeData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceDataUpdateManyArgs>(args: SelectSubset<T, PlaceDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaceData and returns the data updated in the database.
     * @param {PlaceDataUpdateManyAndReturnArgs} args - Arguments to update many PlaceData.
     * @example
     * // Update many PlaceData
     * const placeData = await prisma.placeData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaceData and only return the `id`
     * const placeDataWithIdOnly = await prisma.placeData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaceData.
     * @param {PlaceDataUpsertArgs} args - Arguments to update or create a PlaceData.
     * @example
     * // Update or create a PlaceData
     * const placeData = await prisma.placeData.upsert({
     *   create: {
     *     // ... data to create a PlaceData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaceData we want to update
     *   }
     * })
     */
    upsert<T extends PlaceDataUpsertArgs>(args: SelectSubset<T, PlaceDataUpsertArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataCountArgs} args - Arguments to filter PlaceData to count.
     * @example
     * // Count the number of PlaceData
     * const count = await prisma.placeData.count({
     *   where: {
     *     // ... the filter for the PlaceData we want to count
     *   }
     * })
    **/
    count<T extends PlaceDataCountArgs>(
      args?: Subset<T, PlaceDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceDataAggregateArgs>(args: Subset<T, PlaceDataAggregateArgs>): Prisma.PrismaPromise<GetPlaceDataAggregateType<T>>

    /**
     * Group by PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceDataGroupByArgs['orderBy'] }
        : { orderBy?: PlaceDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaceData model
   */
  readonly fields: PlaceDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaceData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaceData model
   */
  interface PlaceDataFieldRefs {
    readonly id: FieldRef<"PlaceData", 'String'>
    readonly tripId: FieldRef<"PlaceData", 'String'>
    readonly name: FieldRef<"PlaceData", 'String'>
    readonly address: FieldRef<"PlaceData", 'String'>
    readonly coordinates: FieldRef<"PlaceData", 'Json'>
    readonly category: FieldRef<"PlaceData", 'String'>
    readonly description: FieldRef<"PlaceData", 'String'>
    readonly createdAt: FieldRef<"PlaceData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaceData findUnique
   */
  export type PlaceDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData findUniqueOrThrow
   */
  export type PlaceDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData findFirst
   */
  export type PlaceDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceData.
     */
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData findFirstOrThrow
   */
  export type PlaceDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceData.
     */
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData findMany
   */
  export type PlaceDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData create
   */
  export type PlaceDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaceData.
     */
    data: XOR<PlaceDataCreateInput, PlaceDataUncheckedCreateInput>
  }

  /**
   * PlaceData createMany
   */
  export type PlaceDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaceData.
     */
    data: PlaceDataCreateManyInput | PlaceDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaceData createManyAndReturn
   */
  export type PlaceDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * The data used to create many PlaceData.
     */
    data: PlaceDataCreateManyInput | PlaceDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaceData update
   */
  export type PlaceDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaceData.
     */
    data: XOR<PlaceDataUpdateInput, PlaceDataUncheckedUpdateInput>
    /**
     * Choose, which PlaceData to update.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData updateMany
   */
  export type PlaceDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaceData.
     */
    data: XOR<PlaceDataUpdateManyMutationInput, PlaceDataUncheckedUpdateManyInput>
    /**
     * Filter which PlaceData to update
     */
    where?: PlaceDataWhereInput
    /**
     * Limit how many PlaceData to update.
     */
    limit?: number
  }

  /**
   * PlaceData updateManyAndReturn
   */
  export type PlaceDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * The data used to update PlaceData.
     */
    data: XOR<PlaceDataUpdateManyMutationInput, PlaceDataUncheckedUpdateManyInput>
    /**
     * Filter which PlaceData to update
     */
    where?: PlaceDataWhereInput
    /**
     * Limit how many PlaceData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaceData upsert
   */
  export type PlaceDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaceData to update in case it exists.
     */
    where: PlaceDataWhereUniqueInput
    /**
     * In case the PlaceData found by the `where` argument doesn't exist, create a new PlaceData with this data.
     */
    create: XOR<PlaceDataCreateInput, PlaceDataUncheckedCreateInput>
    /**
     * In case the PlaceData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceDataUpdateInput, PlaceDataUncheckedUpdateInput>
  }

  /**
   * PlaceData delete
   */
  export type PlaceDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
    /**
     * Filter which PlaceData to delete.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData deleteMany
   */
  export type PlaceDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceData to delete
     */
    where?: PlaceDataWhereInput
    /**
     * Limit how many PlaceData to delete.
     */
    limit?: number
  }

  /**
   * PlaceData without action
   */
  export type PlaceDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceData
     */
    omit?: PlaceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceDataInclude<ExtArgs> | null
  }


  /**
   * Model TodoItem
   */

  export type AggregateTodoItem = {
    _count: TodoItemCountAggregateOutputType | null
    _avg: TodoItemAvgAggregateOutputType | null
    _sum: TodoItemSumAggregateOutputType | null
    _min: TodoItemMinAggregateOutputType | null
    _max: TodoItemMaxAggregateOutputType | null
  }

  export type TodoItemAvgAggregateOutputType = {
    order: number | null
  }

  export type TodoItemSumAggregateOutputType = {
    order: number | null
  }

  export type TodoItemMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    text: string | null
    completed: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoItemMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    text: string | null
    completed: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoItemCountAggregateOutputType = {
    id: number
    tripId: number
    text: number
    completed: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoItemAvgAggregateInputType = {
    order?: true
  }

  export type TodoItemSumAggregateInputType = {
    order?: true
  }

  export type TodoItemMinAggregateInputType = {
    id?: true
    tripId?: true
    text?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoItemMaxAggregateInputType = {
    id?: true
    tripId?: true
    text?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoItemCountAggregateInputType = {
    id?: true
    tripId?: true
    text?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoItem to aggregate.
     */
    where?: TodoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoItems to fetch.
     */
    orderBy?: TodoItemOrderByWithRelationInput | TodoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodoItems
    **/
    _count?: true | TodoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoItemMaxAggregateInputType
  }

  export type GetTodoItemAggregateType<T extends TodoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTodoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodoItem[P]>
      : GetScalarType<T[P], AggregateTodoItem[P]>
  }




  export type TodoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoItemWhereInput
    orderBy?: TodoItemOrderByWithAggregationInput | TodoItemOrderByWithAggregationInput[]
    by: TodoItemScalarFieldEnum[] | TodoItemScalarFieldEnum
    having?: TodoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoItemCountAggregateInputType | true
    _avg?: TodoItemAvgAggregateInputType
    _sum?: TodoItemSumAggregateInputType
    _min?: TodoItemMinAggregateInputType
    _max?: TodoItemMaxAggregateInputType
  }

  export type TodoItemGroupByOutputType = {
    id: string
    tripId: string
    text: string
    completed: boolean
    order: number | null
    createdAt: Date
    updatedAt: Date
    _count: TodoItemCountAggregateOutputType | null
    _avg: TodoItemAvgAggregateOutputType | null
    _sum: TodoItemSumAggregateOutputType | null
    _min: TodoItemMinAggregateOutputType | null
    _max: TodoItemMaxAggregateOutputType | null
  }

  type GetTodoItemGroupByPayload<T extends TodoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoItemGroupByOutputType[P]>
            : GetScalarType<T[P], TodoItemGroupByOutputType[P]>
        }
      >
    >


  export type TodoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    text?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoItem"]>

  export type TodoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    text?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoItem"]>

  export type TodoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    text?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoItem"]>

  export type TodoItemSelectScalar = {
    id?: boolean
    tripId?: boolean
    text?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TodoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "text" | "completed" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["todoItem"]>
  export type TodoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TodoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TodoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TodoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodoItem"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      text: string
      completed: boolean
      order: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["todoItem"]>
    composites: {}
  }

  type TodoItemGetPayload<S extends boolean | null | undefined | TodoItemDefaultArgs> = $Result.GetResult<Prisma.$TodoItemPayload, S>

  type TodoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoItemCountAggregateInputType | true
    }

  export interface TodoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodoItem'], meta: { name: 'TodoItem' } }
    /**
     * Find zero or one TodoItem that matches the filter.
     * @param {TodoItemFindUniqueArgs} args - Arguments to find a TodoItem
     * @example
     * // Get one TodoItem
     * const todoItem = await prisma.todoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoItemFindUniqueArgs>(args: SelectSubset<T, TodoItemFindUniqueArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TodoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoItemFindUniqueOrThrowArgs} args - Arguments to find a TodoItem
     * @example
     * // Get one TodoItem
     * const todoItem = await prisma.todoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemFindFirstArgs} args - Arguments to find a TodoItem
     * @example
     * // Get one TodoItem
     * const todoItem = await prisma.todoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoItemFindFirstArgs>(args?: SelectSubset<T, TodoItemFindFirstArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemFindFirstOrThrowArgs} args - Arguments to find a TodoItem
     * @example
     * // Get one TodoItem
     * const todoItem = await prisma.todoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TodoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodoItems
     * const todoItems = await prisma.todoItem.findMany()
     * 
     * // Get first 10 TodoItems
     * const todoItems = await prisma.todoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoItemWithIdOnly = await prisma.todoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoItemFindManyArgs>(args?: SelectSubset<T, TodoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TodoItem.
     * @param {TodoItemCreateArgs} args - Arguments to create a TodoItem.
     * @example
     * // Create one TodoItem
     * const TodoItem = await prisma.todoItem.create({
     *   data: {
     *     // ... data to create a TodoItem
     *   }
     * })
     * 
     */
    create<T extends TodoItemCreateArgs>(args: SelectSubset<T, TodoItemCreateArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TodoItems.
     * @param {TodoItemCreateManyArgs} args - Arguments to create many TodoItems.
     * @example
     * // Create many TodoItems
     * const todoItem = await prisma.todoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoItemCreateManyArgs>(args?: SelectSubset<T, TodoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodoItems and returns the data saved in the database.
     * @param {TodoItemCreateManyAndReturnArgs} args - Arguments to create many TodoItems.
     * @example
     * // Create many TodoItems
     * const todoItem = await prisma.todoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodoItems and only return the `id`
     * const todoItemWithIdOnly = await prisma.todoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TodoItem.
     * @param {TodoItemDeleteArgs} args - Arguments to delete one TodoItem.
     * @example
     * // Delete one TodoItem
     * const TodoItem = await prisma.todoItem.delete({
     *   where: {
     *     // ... filter to delete one TodoItem
     *   }
     * })
     * 
     */
    delete<T extends TodoItemDeleteArgs>(args: SelectSubset<T, TodoItemDeleteArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TodoItem.
     * @param {TodoItemUpdateArgs} args - Arguments to update one TodoItem.
     * @example
     * // Update one TodoItem
     * const todoItem = await prisma.todoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoItemUpdateArgs>(args: SelectSubset<T, TodoItemUpdateArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TodoItems.
     * @param {TodoItemDeleteManyArgs} args - Arguments to filter TodoItems to delete.
     * @example
     * // Delete a few TodoItems
     * const { count } = await prisma.todoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoItemDeleteManyArgs>(args?: SelectSubset<T, TodoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodoItems
     * const todoItem = await prisma.todoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoItemUpdateManyArgs>(args: SelectSubset<T, TodoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodoItems and returns the data updated in the database.
     * @param {TodoItemUpdateManyAndReturnArgs} args - Arguments to update many TodoItems.
     * @example
     * // Update many TodoItems
     * const todoItem = await prisma.todoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TodoItems and only return the `id`
     * const todoItemWithIdOnly = await prisma.todoItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TodoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TodoItem.
     * @param {TodoItemUpsertArgs} args - Arguments to update or create a TodoItem.
     * @example
     * // Update or create a TodoItem
     * const todoItem = await prisma.todoItem.upsert({
     *   create: {
     *     // ... data to create a TodoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodoItem we want to update
     *   }
     * })
     */
    upsert<T extends TodoItemUpsertArgs>(args: SelectSubset<T, TodoItemUpsertArgs<ExtArgs>>): Prisma__TodoItemClient<$Result.GetResult<Prisma.$TodoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TodoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemCountArgs} args - Arguments to filter TodoItems to count.
     * @example
     * // Count the number of TodoItems
     * const count = await prisma.todoItem.count({
     *   where: {
     *     // ... the filter for the TodoItems we want to count
     *   }
     * })
    **/
    count<T extends TodoItemCountArgs>(
      args?: Subset<T, TodoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoItemAggregateArgs>(args: Subset<T, TodoItemAggregateArgs>): Prisma.PrismaPromise<GetTodoItemAggregateType<T>>

    /**
     * Group by TodoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoItemGroupByArgs['orderBy'] }
        : { orderBy?: TodoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodoItem model
   */
  readonly fields: TodoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodoItem model
   */
  interface TodoItemFieldRefs {
    readonly id: FieldRef<"TodoItem", 'String'>
    readonly tripId: FieldRef<"TodoItem", 'String'>
    readonly text: FieldRef<"TodoItem", 'String'>
    readonly completed: FieldRef<"TodoItem", 'Boolean'>
    readonly order: FieldRef<"TodoItem", 'Int'>
    readonly createdAt: FieldRef<"TodoItem", 'DateTime'>
    readonly updatedAt: FieldRef<"TodoItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TodoItem findUnique
   */
  export type TodoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter, which TodoItem to fetch.
     */
    where: TodoItemWhereUniqueInput
  }

  /**
   * TodoItem findUniqueOrThrow
   */
  export type TodoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter, which TodoItem to fetch.
     */
    where: TodoItemWhereUniqueInput
  }

  /**
   * TodoItem findFirst
   */
  export type TodoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter, which TodoItem to fetch.
     */
    where?: TodoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoItems to fetch.
     */
    orderBy?: TodoItemOrderByWithRelationInput | TodoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoItems.
     */
    cursor?: TodoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoItems.
     */
    distinct?: TodoItemScalarFieldEnum | TodoItemScalarFieldEnum[]
  }

  /**
   * TodoItem findFirstOrThrow
   */
  export type TodoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter, which TodoItem to fetch.
     */
    where?: TodoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoItems to fetch.
     */
    orderBy?: TodoItemOrderByWithRelationInput | TodoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoItems.
     */
    cursor?: TodoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoItems.
     */
    distinct?: TodoItemScalarFieldEnum | TodoItemScalarFieldEnum[]
  }

  /**
   * TodoItem findMany
   */
  export type TodoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter, which TodoItems to fetch.
     */
    where?: TodoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoItems to fetch.
     */
    orderBy?: TodoItemOrderByWithRelationInput | TodoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodoItems.
     */
    cursor?: TodoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoItems.
     */
    skip?: number
    distinct?: TodoItemScalarFieldEnum | TodoItemScalarFieldEnum[]
  }

  /**
   * TodoItem create
   */
  export type TodoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TodoItem.
     */
    data: XOR<TodoItemCreateInput, TodoItemUncheckedCreateInput>
  }

  /**
   * TodoItem createMany
   */
  export type TodoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodoItems.
     */
    data: TodoItemCreateManyInput | TodoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodoItem createManyAndReturn
   */
  export type TodoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * The data used to create many TodoItems.
     */
    data: TodoItemCreateManyInput | TodoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodoItem update
   */
  export type TodoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TodoItem.
     */
    data: XOR<TodoItemUpdateInput, TodoItemUncheckedUpdateInput>
    /**
     * Choose, which TodoItem to update.
     */
    where: TodoItemWhereUniqueInput
  }

  /**
   * TodoItem updateMany
   */
  export type TodoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodoItems.
     */
    data: XOR<TodoItemUpdateManyMutationInput, TodoItemUncheckedUpdateManyInput>
    /**
     * Filter which TodoItems to update
     */
    where?: TodoItemWhereInput
    /**
     * Limit how many TodoItems to update.
     */
    limit?: number
  }

  /**
   * TodoItem updateManyAndReturn
   */
  export type TodoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * The data used to update TodoItems.
     */
    data: XOR<TodoItemUpdateManyMutationInput, TodoItemUncheckedUpdateManyInput>
    /**
     * Filter which TodoItems to update
     */
    where?: TodoItemWhereInput
    /**
     * Limit how many TodoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodoItem upsert
   */
  export type TodoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TodoItem to update in case it exists.
     */
    where: TodoItemWhereUniqueInput
    /**
     * In case the TodoItem found by the `where` argument doesn't exist, create a new TodoItem with this data.
     */
    create: XOR<TodoItemCreateInput, TodoItemUncheckedCreateInput>
    /**
     * In case the TodoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoItemUpdateInput, TodoItemUncheckedUpdateInput>
  }

  /**
   * TodoItem delete
   */
  export type TodoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
    /**
     * Filter which TodoItem to delete.
     */
    where: TodoItemWhereUniqueInput
  }

  /**
   * TodoItem deleteMany
   */
  export type TodoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoItems to delete
     */
    where?: TodoItemWhereInput
    /**
     * Limit how many TodoItems to delete.
     */
    limit?: number
  }

  /**
   * TodoItem without action
   */
  export type TodoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoItem
     */
    select?: TodoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodoItem
     */
    omit?: TodoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoItemInclude<ExtArgs> | null
  }


  /**
   * Model DaySchedule
   */

  export type AggregateDaySchedule = {
    _count: DayScheduleCountAggregateOutputType | null
    _avg: DayScheduleAvgAggregateOutputType | null
    _sum: DayScheduleSumAggregateOutputType | null
    _min: DayScheduleMinAggregateOutputType | null
    _max: DayScheduleMaxAggregateOutputType | null
  }

  export type DayScheduleAvgAggregateOutputType = {
    day: number | null
  }

  export type DayScheduleSumAggregateOutputType = {
    day: number | null
  }

  export type DayScheduleMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    day: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayScheduleMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    day: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayScheduleCountAggregateOutputType = {
    id: number
    tripId: number
    day: number
    date: number
    placeIds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DayScheduleAvgAggregateInputType = {
    day?: true
  }

  export type DayScheduleSumAggregateInputType = {
    day?: true
  }

  export type DayScheduleMinAggregateInputType = {
    id?: true
    tripId?: true
    day?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayScheduleMaxAggregateInputType = {
    id?: true
    tripId?: true
    day?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayScheduleCountAggregateInputType = {
    id?: true
    tripId?: true
    day?: true
    date?: true
    placeIds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DayScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DaySchedule to aggregate.
     */
    where?: DayScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySchedules to fetch.
     */
    orderBy?: DayScheduleOrderByWithRelationInput | DayScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DaySchedules
    **/
    _count?: true | DayScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayScheduleMaxAggregateInputType
  }

  export type GetDayScheduleAggregateType<T extends DayScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDaySchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaySchedule[P]>
      : GetScalarType<T[P], AggregateDaySchedule[P]>
  }




  export type DayScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayScheduleWhereInput
    orderBy?: DayScheduleOrderByWithAggregationInput | DayScheduleOrderByWithAggregationInput[]
    by: DayScheduleScalarFieldEnum[] | DayScheduleScalarFieldEnum
    having?: DayScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayScheduleCountAggregateInputType | true
    _avg?: DayScheduleAvgAggregateInputType
    _sum?: DayScheduleSumAggregateInputType
    _min?: DayScheduleMinAggregateInputType
    _max?: DayScheduleMaxAggregateInputType
  }

  export type DayScheduleGroupByOutputType = {
    id: string
    tripId: string
    day: number
    date: Date | null
    placeIds: string[]
    createdAt: Date
    updatedAt: Date
    _count: DayScheduleCountAggregateOutputType | null
    _avg: DayScheduleAvgAggregateOutputType | null
    _sum: DayScheduleSumAggregateOutputType | null
    _min: DayScheduleMinAggregateOutputType | null
    _max: DayScheduleMaxAggregateOutputType | null
  }

  type GetDayScheduleGroupByPayload<T extends DayScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], DayScheduleGroupByOutputType[P]>
        }
      >
    >


  export type DayScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    day?: boolean
    date?: boolean
    placeIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySchedule"]>

  export type DayScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    day?: boolean
    date?: boolean
    placeIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySchedule"]>

  export type DayScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    day?: boolean
    date?: boolean
    placeIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySchedule"]>

  export type DayScheduleSelectScalar = {
    id?: boolean
    tripId?: boolean
    day?: boolean
    date?: boolean
    placeIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DayScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "day" | "date" | "placeIds" | "createdAt" | "updatedAt", ExtArgs["result"]["daySchedule"]>
  export type DayScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type DayScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type DayScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $DaySchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DaySchedule"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      day: number
      date: Date | null
      placeIds: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["daySchedule"]>
    composites: {}
  }

  type DayScheduleGetPayload<S extends boolean | null | undefined | DayScheduleDefaultArgs> = $Result.GetResult<Prisma.$DaySchedulePayload, S>

  type DayScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayScheduleCountAggregateInputType | true
    }

  export interface DayScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DaySchedule'], meta: { name: 'DaySchedule' } }
    /**
     * Find zero or one DaySchedule that matches the filter.
     * @param {DayScheduleFindUniqueArgs} args - Arguments to find a DaySchedule
     * @example
     * // Get one DaySchedule
     * const daySchedule = await prisma.daySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayScheduleFindUniqueArgs>(args: SelectSubset<T, DayScheduleFindUniqueArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DaySchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayScheduleFindUniqueOrThrowArgs} args - Arguments to find a DaySchedule
     * @example
     * // Get one DaySchedule
     * const daySchedule = await prisma.daySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, DayScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DaySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleFindFirstArgs} args - Arguments to find a DaySchedule
     * @example
     * // Get one DaySchedule
     * const daySchedule = await prisma.daySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayScheduleFindFirstArgs>(args?: SelectSubset<T, DayScheduleFindFirstArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DaySchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleFindFirstOrThrowArgs} args - Arguments to find a DaySchedule
     * @example
     * // Get one DaySchedule
     * const daySchedule = await prisma.daySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, DayScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DaySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DaySchedules
     * const daySchedules = await prisma.daySchedule.findMany()
     * 
     * // Get first 10 DaySchedules
     * const daySchedules = await prisma.daySchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayScheduleWithIdOnly = await prisma.daySchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayScheduleFindManyArgs>(args?: SelectSubset<T, DayScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DaySchedule.
     * @param {DayScheduleCreateArgs} args - Arguments to create a DaySchedule.
     * @example
     * // Create one DaySchedule
     * const DaySchedule = await prisma.daySchedule.create({
     *   data: {
     *     // ... data to create a DaySchedule
     *   }
     * })
     * 
     */
    create<T extends DayScheduleCreateArgs>(args: SelectSubset<T, DayScheduleCreateArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DaySchedules.
     * @param {DayScheduleCreateManyArgs} args - Arguments to create many DaySchedules.
     * @example
     * // Create many DaySchedules
     * const daySchedule = await prisma.daySchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayScheduleCreateManyArgs>(args?: SelectSubset<T, DayScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DaySchedules and returns the data saved in the database.
     * @param {DayScheduleCreateManyAndReturnArgs} args - Arguments to create many DaySchedules.
     * @example
     * // Create many DaySchedules
     * const daySchedule = await prisma.daySchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DaySchedules and only return the `id`
     * const dayScheduleWithIdOnly = await prisma.daySchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, DayScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DaySchedule.
     * @param {DayScheduleDeleteArgs} args - Arguments to delete one DaySchedule.
     * @example
     * // Delete one DaySchedule
     * const DaySchedule = await prisma.daySchedule.delete({
     *   where: {
     *     // ... filter to delete one DaySchedule
     *   }
     * })
     * 
     */
    delete<T extends DayScheduleDeleteArgs>(args: SelectSubset<T, DayScheduleDeleteArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DaySchedule.
     * @param {DayScheduleUpdateArgs} args - Arguments to update one DaySchedule.
     * @example
     * // Update one DaySchedule
     * const daySchedule = await prisma.daySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayScheduleUpdateArgs>(args: SelectSubset<T, DayScheduleUpdateArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DaySchedules.
     * @param {DayScheduleDeleteManyArgs} args - Arguments to filter DaySchedules to delete.
     * @example
     * // Delete a few DaySchedules
     * const { count } = await prisma.daySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayScheduleDeleteManyArgs>(args?: SelectSubset<T, DayScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DaySchedules
     * const daySchedule = await prisma.daySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayScheduleUpdateManyArgs>(args: SelectSubset<T, DayScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySchedules and returns the data updated in the database.
     * @param {DayScheduleUpdateManyAndReturnArgs} args - Arguments to update many DaySchedules.
     * @example
     * // Update many DaySchedules
     * const daySchedule = await prisma.daySchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DaySchedules and only return the `id`
     * const dayScheduleWithIdOnly = await prisma.daySchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DayScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, DayScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DaySchedule.
     * @param {DayScheduleUpsertArgs} args - Arguments to update or create a DaySchedule.
     * @example
     * // Update or create a DaySchedule
     * const daySchedule = await prisma.daySchedule.upsert({
     *   create: {
     *     // ... data to create a DaySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DaySchedule we want to update
     *   }
     * })
     */
    upsert<T extends DayScheduleUpsertArgs>(args: SelectSubset<T, DayScheduleUpsertArgs<ExtArgs>>): Prisma__DayScheduleClient<$Result.GetResult<Prisma.$DaySchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DaySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleCountArgs} args - Arguments to filter DaySchedules to count.
     * @example
     * // Count the number of DaySchedules
     * const count = await prisma.daySchedule.count({
     *   where: {
     *     // ... the filter for the DaySchedules we want to count
     *   }
     * })
    **/
    count<T extends DayScheduleCountArgs>(
      args?: Subset<T, DayScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DaySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayScheduleAggregateArgs>(args: Subset<T, DayScheduleAggregateArgs>): Prisma.PrismaPromise<GetDayScheduleAggregateType<T>>

    /**
     * Group by DaySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayScheduleGroupByArgs['orderBy'] }
        : { orderBy?: DayScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DaySchedule model
   */
  readonly fields: DayScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DaySchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DaySchedule model
   */
  interface DayScheduleFieldRefs {
    readonly id: FieldRef<"DaySchedule", 'String'>
    readonly tripId: FieldRef<"DaySchedule", 'String'>
    readonly day: FieldRef<"DaySchedule", 'Int'>
    readonly date: FieldRef<"DaySchedule", 'DateTime'>
    readonly placeIds: FieldRef<"DaySchedule", 'String[]'>
    readonly createdAt: FieldRef<"DaySchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"DaySchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DaySchedule findUnique
   */
  export type DayScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DaySchedule to fetch.
     */
    where: DayScheduleWhereUniqueInput
  }

  /**
   * DaySchedule findUniqueOrThrow
   */
  export type DayScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DaySchedule to fetch.
     */
    where: DayScheduleWhereUniqueInput
  }

  /**
   * DaySchedule findFirst
   */
  export type DayScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DaySchedule to fetch.
     */
    where?: DayScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySchedules to fetch.
     */
    orderBy?: DayScheduleOrderByWithRelationInput | DayScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySchedules.
     */
    cursor?: DayScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySchedules.
     */
    distinct?: DayScheduleScalarFieldEnum | DayScheduleScalarFieldEnum[]
  }

  /**
   * DaySchedule findFirstOrThrow
   */
  export type DayScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DaySchedule to fetch.
     */
    where?: DayScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySchedules to fetch.
     */
    orderBy?: DayScheduleOrderByWithRelationInput | DayScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySchedules.
     */
    cursor?: DayScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySchedules.
     */
    distinct?: DayScheduleScalarFieldEnum | DayScheduleScalarFieldEnum[]
  }

  /**
   * DaySchedule findMany
   */
  export type DayScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DaySchedules to fetch.
     */
    where?: DayScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySchedules to fetch.
     */
    orderBy?: DayScheduleOrderByWithRelationInput | DayScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DaySchedules.
     */
    cursor?: DayScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySchedules.
     */
    skip?: number
    distinct?: DayScheduleScalarFieldEnum | DayScheduleScalarFieldEnum[]
  }

  /**
   * DaySchedule create
   */
  export type DayScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a DaySchedule.
     */
    data: XOR<DayScheduleCreateInput, DayScheduleUncheckedCreateInput>
  }

  /**
   * DaySchedule createMany
   */
  export type DayScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DaySchedules.
     */
    data: DayScheduleCreateManyInput | DayScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DaySchedule createManyAndReturn
   */
  export type DayScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many DaySchedules.
     */
    data: DayScheduleCreateManyInput | DayScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DaySchedule update
   */
  export type DayScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a DaySchedule.
     */
    data: XOR<DayScheduleUpdateInput, DayScheduleUncheckedUpdateInput>
    /**
     * Choose, which DaySchedule to update.
     */
    where: DayScheduleWhereUniqueInput
  }

  /**
   * DaySchedule updateMany
   */
  export type DayScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DaySchedules.
     */
    data: XOR<DayScheduleUpdateManyMutationInput, DayScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DaySchedules to update
     */
    where?: DayScheduleWhereInput
    /**
     * Limit how many DaySchedules to update.
     */
    limit?: number
  }

  /**
   * DaySchedule updateManyAndReturn
   */
  export type DayScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * The data used to update DaySchedules.
     */
    data: XOR<DayScheduleUpdateManyMutationInput, DayScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DaySchedules to update
     */
    where?: DayScheduleWhereInput
    /**
     * Limit how many DaySchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DaySchedule upsert
   */
  export type DayScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the DaySchedule to update in case it exists.
     */
    where: DayScheduleWhereUniqueInput
    /**
     * In case the DaySchedule found by the `where` argument doesn't exist, create a new DaySchedule with this data.
     */
    create: XOR<DayScheduleCreateInput, DayScheduleUncheckedCreateInput>
    /**
     * In case the DaySchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayScheduleUpdateInput, DayScheduleUncheckedUpdateInput>
  }

  /**
   * DaySchedule delete
   */
  export type DayScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
    /**
     * Filter which DaySchedule to delete.
     */
    where: DayScheduleWhereUniqueInput
  }

  /**
   * DaySchedule deleteMany
   */
  export type DayScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DaySchedules to delete
     */
    where?: DayScheduleWhereInput
    /**
     * Limit how many DaySchedules to delete.
     */
    limit?: number
  }

  /**
   * DaySchedule without action
   */
  export type DayScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySchedule
     */
    select?: DayScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySchedule
     */
    omit?: DayScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ShareLink
   */

  export type AggregateShareLink = {
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  export type ShareLinkMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    token: string | null
    role: $Enums.CollaboratorRole | null
    scope: string | null
    expiresAt: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ShareLinkMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    token: string | null
    role: $Enums.CollaboratorRole | null
    scope: string | null
    expiresAt: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ShareLinkCountAggregateOutputType = {
    id: number
    tripId: number
    token: number
    role: number
    scope: number
    expiresAt: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ShareLinkMinAggregateInputType = {
    id?: true
    tripId?: true
    token?: true
    role?: true
    scope?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
  }

  export type ShareLinkMaxAggregateInputType = {
    id?: true
    tripId?: true
    token?: true
    role?: true
    scope?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
  }

  export type ShareLinkCountAggregateInputType = {
    id?: true
    tripId?: true
    token?: true
    role?: true
    scope?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ShareLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLink to aggregate.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareLinks
    **/
    _count?: true | ShareLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareLinkMaxAggregateInputType
  }

  export type GetShareLinkAggregateType<T extends ShareLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShareLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareLink[P]>
      : GetScalarType<T[P], AggregateShareLink[P]>
  }




  export type ShareLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithAggregationInput | ShareLinkOrderByWithAggregationInput[]
    by: ShareLinkScalarFieldEnum[] | ShareLinkScalarFieldEnum
    having?: ShareLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareLinkCountAggregateInputType | true
    _min?: ShareLinkMinAggregateInputType
    _max?: ShareLinkMaxAggregateInputType
  }

  export type ShareLinkGroupByOutputType = {
    id: string
    tripId: string
    token: string
    role: $Enums.CollaboratorRole
    scope: string
    expiresAt: Date | null
    createdBy: string
    createdAt: Date
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  type GetShareLinkGroupByPayload<T extends ShareLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShareLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    token?: boolean
    role?: boolean
    scope?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    token?: boolean
    role?: boolean
    scope?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    token?: boolean
    role?: boolean
    scope?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectScalar = {
    id?: boolean
    tripId?: boolean
    token?: boolean
    role?: boolean
    scope?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ShareLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "token" | "role" | "scope" | "expiresAt" | "createdBy" | "createdAt", ExtArgs["result"]["shareLink"]>
  export type ShareLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $ShareLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareLink"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      token: string
      role: $Enums.CollaboratorRole
      scope: string
      expiresAt: Date | null
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["shareLink"]>
    composites: {}
  }

  type ShareLinkGetPayload<S extends boolean | null | undefined | ShareLinkDefaultArgs> = $Result.GetResult<Prisma.$ShareLinkPayload, S>

  type ShareLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareLinkCountAggregateInputType | true
    }

  export interface ShareLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareLink'], meta: { name: 'ShareLink' } }
    /**
     * Find zero or one ShareLink that matches the filter.
     * @param {ShareLinkFindUniqueArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareLinkFindUniqueArgs>(args: SelectSubset<T, ShareLinkFindUniqueArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareLinkFindUniqueOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareLinkFindFirstArgs>(args?: SelectSubset<T, ShareLinkFindFirstArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareLinks
     * const shareLinks = await prisma.shareLink.findMany()
     * 
     * // Get first 10 ShareLinks
     * const shareLinks = await prisma.shareLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareLinkFindManyArgs>(args?: SelectSubset<T, ShareLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareLink.
     * @param {ShareLinkCreateArgs} args - Arguments to create a ShareLink.
     * @example
     * // Create one ShareLink
     * const ShareLink = await prisma.shareLink.create({
     *   data: {
     *     // ... data to create a ShareLink
     *   }
     * })
     * 
     */
    create<T extends ShareLinkCreateArgs>(args: SelectSubset<T, ShareLinkCreateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareLinks.
     * @param {ShareLinkCreateManyArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareLinkCreateManyArgs>(args?: SelectSubset<T, ShareLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareLinks and returns the data saved in the database.
     * @param {ShareLinkCreateManyAndReturnArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareLink.
     * @param {ShareLinkDeleteArgs} args - Arguments to delete one ShareLink.
     * @example
     * // Delete one ShareLink
     * const ShareLink = await prisma.shareLink.delete({
     *   where: {
     *     // ... filter to delete one ShareLink
     *   }
     * })
     * 
     */
    delete<T extends ShareLinkDeleteArgs>(args: SelectSubset<T, ShareLinkDeleteArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareLink.
     * @param {ShareLinkUpdateArgs} args - Arguments to update one ShareLink.
     * @example
     * // Update one ShareLink
     * const shareLink = await prisma.shareLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareLinkUpdateArgs>(args: SelectSubset<T, ShareLinkUpdateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareLinks.
     * @param {ShareLinkDeleteManyArgs} args - Arguments to filter ShareLinks to delete.
     * @example
     * // Delete a few ShareLinks
     * const { count } = await prisma.shareLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareLinkDeleteManyArgs>(args?: SelectSubset<T, ShareLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareLinkUpdateManyArgs>(args: SelectSubset<T, ShareLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks and returns the data updated in the database.
     * @param {ShareLinkUpdateManyAndReturnArgs} args - Arguments to update many ShareLinks.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareLink.
     * @param {ShareLinkUpsertArgs} args - Arguments to update or create a ShareLink.
     * @example
     * // Update or create a ShareLink
     * const shareLink = await prisma.shareLink.upsert({
     *   create: {
     *     // ... data to create a ShareLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareLink we want to update
     *   }
     * })
     */
    upsert<T extends ShareLinkUpsertArgs>(args: SelectSubset<T, ShareLinkUpsertArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkCountArgs} args - Arguments to filter ShareLinks to count.
     * @example
     * // Count the number of ShareLinks
     * const count = await prisma.shareLink.count({
     *   where: {
     *     // ... the filter for the ShareLinks we want to count
     *   }
     * })
    **/
    count<T extends ShareLinkCountArgs>(
      args?: Subset<T, ShareLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareLinkAggregateArgs>(args: Subset<T, ShareLinkAggregateArgs>): Prisma.PrismaPromise<GetShareLinkAggregateType<T>>

    /**
     * Group by ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShareLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareLink model
   */
  readonly fields: ShareLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareLink model
   */
  interface ShareLinkFieldRefs {
    readonly id: FieldRef<"ShareLink", 'String'>
    readonly tripId: FieldRef<"ShareLink", 'String'>
    readonly token: FieldRef<"ShareLink", 'String'>
    readonly role: FieldRef<"ShareLink", 'CollaboratorRole'>
    readonly scope: FieldRef<"ShareLink", 'String'>
    readonly expiresAt: FieldRef<"ShareLink", 'DateTime'>
    readonly createdBy: FieldRef<"ShareLink", 'String'>
    readonly createdAt: FieldRef<"ShareLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareLink findUnique
   */
  export type ShareLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findUniqueOrThrow
   */
  export type ShareLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findFirst
   */
  export type ShareLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findFirstOrThrow
   */
  export type ShareLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findMany
   */
  export type ShareLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLinks to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink create
   */
  export type ShareLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareLink.
     */
    data: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
  }

  /**
   * ShareLink createMany
   */
  export type ShareLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareLink createManyAndReturn
   */
  export type ShareLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink update
   */
  export type ShareLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareLink.
     */
    data: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
    /**
     * Choose, which ShareLink to update.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink updateMany
   */
  export type ShareLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink updateManyAndReturn
   */
  export type ShareLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink upsert
   */
  export type ShareLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareLink to update in case it exists.
     */
    where: ShareLinkWhereUniqueInput
    /**
     * In case the ShareLink found by the `where` argument doesn't exist, create a new ShareLink with this data.
     */
    create: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
    /**
     * In case the ShareLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
  }

  /**
   * ShareLink delete
   */
  export type ShareLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter which ShareLink to delete.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink deleteMany
   */
  export type ShareLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLinks to delete
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to delete.
     */
    limit?: number
  }

  /**
   * ShareLink without action
   */
  export type ShareLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
  }


  /**
   * Model UserFavoriteTrip
   */

  export type AggregateUserFavoriteTrip = {
    _count: UserFavoriteTripCountAggregateOutputType | null
    _min: UserFavoriteTripMinAggregateOutputType | null
    _max: UserFavoriteTripMaxAggregateOutputType | null
  }

  export type UserFavoriteTripMinAggregateOutputType = {
    userId: string | null
    tripId: string | null
  }

  export type UserFavoriteTripMaxAggregateOutputType = {
    userId: string | null
    tripId: string | null
  }

  export type UserFavoriteTripCountAggregateOutputType = {
    userId: number
    tripId: number
    _all: number
  }


  export type UserFavoriteTripMinAggregateInputType = {
    userId?: true
    tripId?: true
  }

  export type UserFavoriteTripMaxAggregateInputType = {
    userId?: true
    tripId?: true
  }

  export type UserFavoriteTripCountAggregateInputType = {
    userId?: true
    tripId?: true
    _all?: true
  }

  export type UserFavoriteTripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavoriteTrip to aggregate.
     */
    where?: UserFavoriteTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteTrips to fetch.
     */
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavoriteTrips
    **/
    _count?: true | UserFavoriteTripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteTripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteTripMaxAggregateInputType
  }

  export type GetUserFavoriteTripAggregateType<T extends UserFavoriteTripAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavoriteTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavoriteTrip[P]>
      : GetScalarType<T[P], AggregateUserFavoriteTrip[P]>
  }




  export type UserFavoriteTripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteTripWhereInput
    orderBy?: UserFavoriteTripOrderByWithAggregationInput | UserFavoriteTripOrderByWithAggregationInput[]
    by: UserFavoriteTripScalarFieldEnum[] | UserFavoriteTripScalarFieldEnum
    having?: UserFavoriteTripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteTripCountAggregateInputType | true
    _min?: UserFavoriteTripMinAggregateInputType
    _max?: UserFavoriteTripMaxAggregateInputType
  }

  export type UserFavoriteTripGroupByOutputType = {
    userId: string
    tripId: string
    _count: UserFavoriteTripCountAggregateOutputType | null
    _min: UserFavoriteTripMinAggregateOutputType | null
    _max: UserFavoriteTripMaxAggregateOutputType | null
  }

  type GetUserFavoriteTripGroupByPayload<T extends UserFavoriteTripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteTripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteTripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteTripGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteTripGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteTripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tripId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteTrip"]>

  export type UserFavoriteTripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tripId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteTrip"]>

  export type UserFavoriteTripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tripId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavoriteTrip"]>

  export type UserFavoriteTripSelectScalar = {
    userId?: boolean
    tripId?: boolean
  }

  export type UserFavoriteTripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "tripId", ExtArgs["result"]["userFavoriteTrip"]>
  export type UserFavoriteTripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type UserFavoriteTripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type UserFavoriteTripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $UserFavoriteTripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavoriteTrip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      tripId: string
    }, ExtArgs["result"]["userFavoriteTrip"]>
    composites: {}
  }

  type UserFavoriteTripGetPayload<S extends boolean | null | undefined | UserFavoriteTripDefaultArgs> = $Result.GetResult<Prisma.$UserFavoriteTripPayload, S>

  type UserFavoriteTripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavoriteTripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavoriteTripCountAggregateInputType | true
    }

  export interface UserFavoriteTripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavoriteTrip'], meta: { name: 'UserFavoriteTrip' } }
    /**
     * Find zero or one UserFavoriteTrip that matches the filter.
     * @param {UserFavoriteTripFindUniqueArgs} args - Arguments to find a UserFavoriteTrip
     * @example
     * // Get one UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteTripFindUniqueArgs>(args: SelectSubset<T, UserFavoriteTripFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavoriteTrip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavoriteTripFindUniqueOrThrowArgs} args - Arguments to find a UserFavoriteTrip
     * @example
     * // Get one UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteTripFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteTripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavoriteTrip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripFindFirstArgs} args - Arguments to find a UserFavoriteTrip
     * @example
     * // Get one UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteTripFindFirstArgs>(args?: SelectSubset<T, UserFavoriteTripFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavoriteTrip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripFindFirstOrThrowArgs} args - Arguments to find a UserFavoriteTrip
     * @example
     * // Get one UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteTripFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteTripFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavoriteTrips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavoriteTrips
     * const userFavoriteTrips = await prisma.userFavoriteTrip.findMany()
     * 
     * // Get first 10 UserFavoriteTrips
     * const userFavoriteTrips = await prisma.userFavoriteTrip.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userFavoriteTripWithUserIdOnly = await prisma.userFavoriteTrip.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFavoriteTripFindManyArgs>(args?: SelectSubset<T, UserFavoriteTripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavoriteTrip.
     * @param {UserFavoriteTripCreateArgs} args - Arguments to create a UserFavoriteTrip.
     * @example
     * // Create one UserFavoriteTrip
     * const UserFavoriteTrip = await prisma.userFavoriteTrip.create({
     *   data: {
     *     // ... data to create a UserFavoriteTrip
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteTripCreateArgs>(args: SelectSubset<T, UserFavoriteTripCreateArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavoriteTrips.
     * @param {UserFavoriteTripCreateManyArgs} args - Arguments to create many UserFavoriteTrips.
     * @example
     * // Create many UserFavoriteTrips
     * const userFavoriteTrip = await prisma.userFavoriteTrip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteTripCreateManyArgs>(args?: SelectSubset<T, UserFavoriteTripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavoriteTrips and returns the data saved in the database.
     * @param {UserFavoriteTripCreateManyAndReturnArgs} args - Arguments to create many UserFavoriteTrips.
     * @example
     * // Create many UserFavoriteTrips
     * const userFavoriteTrip = await prisma.userFavoriteTrip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavoriteTrips and only return the `userId`
     * const userFavoriteTripWithUserIdOnly = await prisma.userFavoriteTrip.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteTripCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteTripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavoriteTrip.
     * @param {UserFavoriteTripDeleteArgs} args - Arguments to delete one UserFavoriteTrip.
     * @example
     * // Delete one UserFavoriteTrip
     * const UserFavoriteTrip = await prisma.userFavoriteTrip.delete({
     *   where: {
     *     // ... filter to delete one UserFavoriteTrip
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteTripDeleteArgs>(args: SelectSubset<T, UserFavoriteTripDeleteArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavoriteTrip.
     * @param {UserFavoriteTripUpdateArgs} args - Arguments to update one UserFavoriteTrip.
     * @example
     * // Update one UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteTripUpdateArgs>(args: SelectSubset<T, UserFavoriteTripUpdateArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavoriteTrips.
     * @param {UserFavoriteTripDeleteManyArgs} args - Arguments to filter UserFavoriteTrips to delete.
     * @example
     * // Delete a few UserFavoriteTrips
     * const { count } = await prisma.userFavoriteTrip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteTripDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteTripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavoriteTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavoriteTrips
     * const userFavoriteTrip = await prisma.userFavoriteTrip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteTripUpdateManyArgs>(args: SelectSubset<T, UserFavoriteTripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavoriteTrips and returns the data updated in the database.
     * @param {UserFavoriteTripUpdateManyAndReturnArgs} args - Arguments to update many UserFavoriteTrips.
     * @example
     * // Update many UserFavoriteTrips
     * const userFavoriteTrip = await prisma.userFavoriteTrip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavoriteTrips and only return the `userId`
     * const userFavoriteTripWithUserIdOnly = await prisma.userFavoriteTrip.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFavoriteTripUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavoriteTripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavoriteTrip.
     * @param {UserFavoriteTripUpsertArgs} args - Arguments to update or create a UserFavoriteTrip.
     * @example
     * // Update or create a UserFavoriteTrip
     * const userFavoriteTrip = await prisma.userFavoriteTrip.upsert({
     *   create: {
     *     // ... data to create a UserFavoriteTrip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavoriteTrip we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteTripUpsertArgs>(args: SelectSubset<T, UserFavoriteTripUpsertArgs<ExtArgs>>): Prisma__UserFavoriteTripClient<$Result.GetResult<Prisma.$UserFavoriteTripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavoriteTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripCountArgs} args - Arguments to filter UserFavoriteTrips to count.
     * @example
     * // Count the number of UserFavoriteTrips
     * const count = await prisma.userFavoriteTrip.count({
     *   where: {
     *     // ... the filter for the UserFavoriteTrips we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteTripCountArgs>(
      args?: Subset<T, UserFavoriteTripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteTripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavoriteTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavoriteTripAggregateArgs>(args: Subset<T, UserFavoriteTripAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteTripAggregateType<T>>

    /**
     * Group by UserFavoriteTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteTripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavoriteTripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteTripGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteTripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavoriteTripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavoriteTrip model
   */
  readonly fields: UserFavoriteTripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavoriteTrip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteTripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavoriteTrip model
   */
  interface UserFavoriteTripFieldRefs {
    readonly userId: FieldRef<"UserFavoriteTrip", 'String'>
    readonly tripId: FieldRef<"UserFavoriteTrip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserFavoriteTrip findUnique
   */
  export type UserFavoriteTripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteTrip to fetch.
     */
    where: UserFavoriteTripWhereUniqueInput
  }

  /**
   * UserFavoriteTrip findUniqueOrThrow
   */
  export type UserFavoriteTripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteTrip to fetch.
     */
    where: UserFavoriteTripWhereUniqueInput
  }

  /**
   * UserFavoriteTrip findFirst
   */
  export type UserFavoriteTripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteTrip to fetch.
     */
    where?: UserFavoriteTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteTrips to fetch.
     */
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavoriteTrips.
     */
    cursor?: UserFavoriteTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavoriteTrips.
     */
    distinct?: UserFavoriteTripScalarFieldEnum | UserFavoriteTripScalarFieldEnum[]
  }

  /**
   * UserFavoriteTrip findFirstOrThrow
   */
  export type UserFavoriteTripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteTrip to fetch.
     */
    where?: UserFavoriteTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteTrips to fetch.
     */
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavoriteTrips.
     */
    cursor?: UserFavoriteTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavoriteTrips.
     */
    distinct?: UserFavoriteTripScalarFieldEnum | UserFavoriteTripScalarFieldEnum[]
  }

  /**
   * UserFavoriteTrip findMany
   */
  export type UserFavoriteTripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter, which UserFavoriteTrips to fetch.
     */
    where?: UserFavoriteTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavoriteTrips to fetch.
     */
    orderBy?: UserFavoriteTripOrderByWithRelationInput | UserFavoriteTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavoriteTrips.
     */
    cursor?: UserFavoriteTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavoriteTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavoriteTrips.
     */
    skip?: number
    distinct?: UserFavoriteTripScalarFieldEnum | UserFavoriteTripScalarFieldEnum[]
  }

  /**
   * UserFavoriteTrip create
   */
  export type UserFavoriteTripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavoriteTrip.
     */
    data: XOR<UserFavoriteTripCreateInput, UserFavoriteTripUncheckedCreateInput>
  }

  /**
   * UserFavoriteTrip createMany
   */
  export type UserFavoriteTripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavoriteTrips.
     */
    data: UserFavoriteTripCreateManyInput | UserFavoriteTripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavoriteTrip createManyAndReturn
   */
  export type UserFavoriteTripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavoriteTrips.
     */
    data: UserFavoriteTripCreateManyInput | UserFavoriteTripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavoriteTrip update
   */
  export type UserFavoriteTripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavoriteTrip.
     */
    data: XOR<UserFavoriteTripUpdateInput, UserFavoriteTripUncheckedUpdateInput>
    /**
     * Choose, which UserFavoriteTrip to update.
     */
    where: UserFavoriteTripWhereUniqueInput
  }

  /**
   * UserFavoriteTrip updateMany
   */
  export type UserFavoriteTripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavoriteTrips.
     */
    data: XOR<UserFavoriteTripUpdateManyMutationInput, UserFavoriteTripUncheckedUpdateManyInput>
    /**
     * Filter which UserFavoriteTrips to update
     */
    where?: UserFavoriteTripWhereInput
    /**
     * Limit how many UserFavoriteTrips to update.
     */
    limit?: number
  }

  /**
   * UserFavoriteTrip updateManyAndReturn
   */
  export type UserFavoriteTripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * The data used to update UserFavoriteTrips.
     */
    data: XOR<UserFavoriteTripUpdateManyMutationInput, UserFavoriteTripUncheckedUpdateManyInput>
    /**
     * Filter which UserFavoriteTrips to update
     */
    where?: UserFavoriteTripWhereInput
    /**
     * Limit how many UserFavoriteTrips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavoriteTrip upsert
   */
  export type UserFavoriteTripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavoriteTrip to update in case it exists.
     */
    where: UserFavoriteTripWhereUniqueInput
    /**
     * In case the UserFavoriteTrip found by the `where` argument doesn't exist, create a new UserFavoriteTrip with this data.
     */
    create: XOR<UserFavoriteTripCreateInput, UserFavoriteTripUncheckedCreateInput>
    /**
     * In case the UserFavoriteTrip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteTripUpdateInput, UserFavoriteTripUncheckedUpdateInput>
  }

  /**
   * UserFavoriteTrip delete
   */
  export type UserFavoriteTripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
    /**
     * Filter which UserFavoriteTrip to delete.
     */
    where: UserFavoriteTripWhereUniqueInput
  }

  /**
   * UserFavoriteTrip deleteMany
   */
  export type UserFavoriteTripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavoriteTrips to delete
     */
    where?: UserFavoriteTripWhereInput
    /**
     * Limit how many UserFavoriteTrips to delete.
     */
    limit?: number
  }

  /**
   * UserFavoriteTrip without action
   */
  export type UserFavoriteTripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavoriteTrip
     */
    select?: UserFavoriteTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavoriteTrip
     */
    omit?: UserFavoriteTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteTripInclude<ExtArgs> | null
  }


  /**
   * Model UserRecentTrip
   */

  export type AggregateUserRecentTrip = {
    _count: UserRecentTripCountAggregateOutputType | null
    _min: UserRecentTripMinAggregateOutputType | null
    _max: UserRecentTripMaxAggregateOutputType | null
  }

  export type UserRecentTripMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    viewedAt: Date | null
    createdAt: Date | null
  }

  export type UserRecentTripMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    viewedAt: Date | null
    createdAt: Date | null
  }

  export type UserRecentTripCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    viewedAt: number
    createdAt: number
    _all: number
  }


  export type UserRecentTripMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    viewedAt?: true
    createdAt?: true
  }

  export type UserRecentTripMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    viewedAt?: true
    createdAt?: true
  }

  export type UserRecentTripCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    viewedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserRecentTripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRecentTrip to aggregate.
     */
    where?: UserRecentTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentTrips to fetch.
     */
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRecentTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRecentTrips
    **/
    _count?: true | UserRecentTripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRecentTripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRecentTripMaxAggregateInputType
  }

  export type GetUserRecentTripAggregateType<T extends UserRecentTripAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRecentTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRecentTrip[P]>
      : GetScalarType<T[P], AggregateUserRecentTrip[P]>
  }




  export type UserRecentTripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentTripWhereInput
    orderBy?: UserRecentTripOrderByWithAggregationInput | UserRecentTripOrderByWithAggregationInput[]
    by: UserRecentTripScalarFieldEnum[] | UserRecentTripScalarFieldEnum
    having?: UserRecentTripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRecentTripCountAggregateInputType | true
    _min?: UserRecentTripMinAggregateInputType
    _max?: UserRecentTripMaxAggregateInputType
  }

  export type UserRecentTripGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    viewedAt: Date
    createdAt: Date
    _count: UserRecentTripCountAggregateOutputType | null
    _min: UserRecentTripMinAggregateOutputType | null
    _max: UserRecentTripMaxAggregateOutputType | null
  }

  type GetUserRecentTripGroupByPayload<T extends UserRecentTripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRecentTripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRecentTripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRecentTripGroupByOutputType[P]>
            : GetScalarType<T[P], UserRecentTripGroupByOutputType[P]>
        }
      >
    >


  export type UserRecentTripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    viewedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRecentTrip"]>

  export type UserRecentTripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    viewedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRecentTrip"]>

  export type UserRecentTripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    viewedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRecentTrip"]>

  export type UserRecentTripSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    viewedAt?: boolean
    createdAt?: boolean
  }

  export type UserRecentTripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "viewedAt" | "createdAt", ExtArgs["result"]["userRecentTrip"]>
  export type UserRecentTripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type UserRecentTripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type UserRecentTripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $UserRecentTripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRecentTrip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      viewedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userRecentTrip"]>
    composites: {}
  }

  type UserRecentTripGetPayload<S extends boolean | null | undefined | UserRecentTripDefaultArgs> = $Result.GetResult<Prisma.$UserRecentTripPayload, S>

  type UserRecentTripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRecentTripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRecentTripCountAggregateInputType | true
    }

  export interface UserRecentTripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRecentTrip'], meta: { name: 'UserRecentTrip' } }
    /**
     * Find zero or one UserRecentTrip that matches the filter.
     * @param {UserRecentTripFindUniqueArgs} args - Arguments to find a UserRecentTrip
     * @example
     * // Get one UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRecentTripFindUniqueArgs>(args: SelectSubset<T, UserRecentTripFindUniqueArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRecentTrip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRecentTripFindUniqueOrThrowArgs} args - Arguments to find a UserRecentTrip
     * @example
     * // Get one UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRecentTripFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRecentTripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRecentTrip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripFindFirstArgs} args - Arguments to find a UserRecentTrip
     * @example
     * // Get one UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRecentTripFindFirstArgs>(args?: SelectSubset<T, UserRecentTripFindFirstArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRecentTrip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripFindFirstOrThrowArgs} args - Arguments to find a UserRecentTrip
     * @example
     * // Get one UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRecentTripFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRecentTripFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRecentTrips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRecentTrips
     * const userRecentTrips = await prisma.userRecentTrip.findMany()
     * 
     * // Get first 10 UserRecentTrips
     * const userRecentTrips = await prisma.userRecentTrip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRecentTripWithIdOnly = await prisma.userRecentTrip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRecentTripFindManyArgs>(args?: SelectSubset<T, UserRecentTripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRecentTrip.
     * @param {UserRecentTripCreateArgs} args - Arguments to create a UserRecentTrip.
     * @example
     * // Create one UserRecentTrip
     * const UserRecentTrip = await prisma.userRecentTrip.create({
     *   data: {
     *     // ... data to create a UserRecentTrip
     *   }
     * })
     * 
     */
    create<T extends UserRecentTripCreateArgs>(args: SelectSubset<T, UserRecentTripCreateArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRecentTrips.
     * @param {UserRecentTripCreateManyArgs} args - Arguments to create many UserRecentTrips.
     * @example
     * // Create many UserRecentTrips
     * const userRecentTrip = await prisma.userRecentTrip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRecentTripCreateManyArgs>(args?: SelectSubset<T, UserRecentTripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRecentTrips and returns the data saved in the database.
     * @param {UserRecentTripCreateManyAndReturnArgs} args - Arguments to create many UserRecentTrips.
     * @example
     * // Create many UserRecentTrips
     * const userRecentTrip = await prisma.userRecentTrip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRecentTrips and only return the `id`
     * const userRecentTripWithIdOnly = await prisma.userRecentTrip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRecentTripCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRecentTripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRecentTrip.
     * @param {UserRecentTripDeleteArgs} args - Arguments to delete one UserRecentTrip.
     * @example
     * // Delete one UserRecentTrip
     * const UserRecentTrip = await prisma.userRecentTrip.delete({
     *   where: {
     *     // ... filter to delete one UserRecentTrip
     *   }
     * })
     * 
     */
    delete<T extends UserRecentTripDeleteArgs>(args: SelectSubset<T, UserRecentTripDeleteArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRecentTrip.
     * @param {UserRecentTripUpdateArgs} args - Arguments to update one UserRecentTrip.
     * @example
     * // Update one UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRecentTripUpdateArgs>(args: SelectSubset<T, UserRecentTripUpdateArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRecentTrips.
     * @param {UserRecentTripDeleteManyArgs} args - Arguments to filter UserRecentTrips to delete.
     * @example
     * // Delete a few UserRecentTrips
     * const { count } = await prisma.userRecentTrip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRecentTripDeleteManyArgs>(args?: SelectSubset<T, UserRecentTripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRecentTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRecentTrips
     * const userRecentTrip = await prisma.userRecentTrip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRecentTripUpdateManyArgs>(args: SelectSubset<T, UserRecentTripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRecentTrips and returns the data updated in the database.
     * @param {UserRecentTripUpdateManyAndReturnArgs} args - Arguments to update many UserRecentTrips.
     * @example
     * // Update many UserRecentTrips
     * const userRecentTrip = await prisma.userRecentTrip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRecentTrips and only return the `id`
     * const userRecentTripWithIdOnly = await prisma.userRecentTrip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRecentTripUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRecentTripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRecentTrip.
     * @param {UserRecentTripUpsertArgs} args - Arguments to update or create a UserRecentTrip.
     * @example
     * // Update or create a UserRecentTrip
     * const userRecentTrip = await prisma.userRecentTrip.upsert({
     *   create: {
     *     // ... data to create a UserRecentTrip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRecentTrip we want to update
     *   }
     * })
     */
    upsert<T extends UserRecentTripUpsertArgs>(args: SelectSubset<T, UserRecentTripUpsertArgs<ExtArgs>>): Prisma__UserRecentTripClient<$Result.GetResult<Prisma.$UserRecentTripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRecentTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripCountArgs} args - Arguments to filter UserRecentTrips to count.
     * @example
     * // Count the number of UserRecentTrips
     * const count = await prisma.userRecentTrip.count({
     *   where: {
     *     // ... the filter for the UserRecentTrips we want to count
     *   }
     * })
    **/
    count<T extends UserRecentTripCountArgs>(
      args?: Subset<T, UserRecentTripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRecentTripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRecentTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRecentTripAggregateArgs>(args: Subset<T, UserRecentTripAggregateArgs>): Prisma.PrismaPromise<GetUserRecentTripAggregateType<T>>

    /**
     * Group by UserRecentTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentTripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRecentTripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRecentTripGroupByArgs['orderBy'] }
        : { orderBy?: UserRecentTripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRecentTripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRecentTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRecentTrip model
   */
  readonly fields: UserRecentTripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRecentTrip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRecentTripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRecentTrip model
   */
  interface UserRecentTripFieldRefs {
    readonly id: FieldRef<"UserRecentTrip", 'String'>
    readonly userId: FieldRef<"UserRecentTrip", 'String'>
    readonly tripId: FieldRef<"UserRecentTrip", 'String'>
    readonly viewedAt: FieldRef<"UserRecentTrip", 'DateTime'>
    readonly createdAt: FieldRef<"UserRecentTrip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRecentTrip findUnique
   */
  export type UserRecentTripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentTrip to fetch.
     */
    where: UserRecentTripWhereUniqueInput
  }

  /**
   * UserRecentTrip findUniqueOrThrow
   */
  export type UserRecentTripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentTrip to fetch.
     */
    where: UserRecentTripWhereUniqueInput
  }

  /**
   * UserRecentTrip findFirst
   */
  export type UserRecentTripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentTrip to fetch.
     */
    where?: UserRecentTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentTrips to fetch.
     */
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRecentTrips.
     */
    cursor?: UserRecentTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRecentTrips.
     */
    distinct?: UserRecentTripScalarFieldEnum | UserRecentTripScalarFieldEnum[]
  }

  /**
   * UserRecentTrip findFirstOrThrow
   */
  export type UserRecentTripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentTrip to fetch.
     */
    where?: UserRecentTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentTrips to fetch.
     */
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRecentTrips.
     */
    cursor?: UserRecentTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRecentTrips.
     */
    distinct?: UserRecentTripScalarFieldEnum | UserRecentTripScalarFieldEnum[]
  }

  /**
   * UserRecentTrip findMany
   */
  export type UserRecentTripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentTrips to fetch.
     */
    where?: UserRecentTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentTrips to fetch.
     */
    orderBy?: UserRecentTripOrderByWithRelationInput | UserRecentTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRecentTrips.
     */
    cursor?: UserRecentTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentTrips.
     */
    skip?: number
    distinct?: UserRecentTripScalarFieldEnum | UserRecentTripScalarFieldEnum[]
  }

  /**
   * UserRecentTrip create
   */
  export type UserRecentTripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRecentTrip.
     */
    data: XOR<UserRecentTripCreateInput, UserRecentTripUncheckedCreateInput>
  }

  /**
   * UserRecentTrip createMany
   */
  export type UserRecentTripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRecentTrips.
     */
    data: UserRecentTripCreateManyInput | UserRecentTripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRecentTrip createManyAndReturn
   */
  export type UserRecentTripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * The data used to create many UserRecentTrips.
     */
    data: UserRecentTripCreateManyInput | UserRecentTripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRecentTrip update
   */
  export type UserRecentTripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRecentTrip.
     */
    data: XOR<UserRecentTripUpdateInput, UserRecentTripUncheckedUpdateInput>
    /**
     * Choose, which UserRecentTrip to update.
     */
    where: UserRecentTripWhereUniqueInput
  }

  /**
   * UserRecentTrip updateMany
   */
  export type UserRecentTripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRecentTrips.
     */
    data: XOR<UserRecentTripUpdateManyMutationInput, UserRecentTripUncheckedUpdateManyInput>
    /**
     * Filter which UserRecentTrips to update
     */
    where?: UserRecentTripWhereInput
    /**
     * Limit how many UserRecentTrips to update.
     */
    limit?: number
  }

  /**
   * UserRecentTrip updateManyAndReturn
   */
  export type UserRecentTripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * The data used to update UserRecentTrips.
     */
    data: XOR<UserRecentTripUpdateManyMutationInput, UserRecentTripUncheckedUpdateManyInput>
    /**
     * Filter which UserRecentTrips to update
     */
    where?: UserRecentTripWhereInput
    /**
     * Limit how many UserRecentTrips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRecentTrip upsert
   */
  export type UserRecentTripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRecentTrip to update in case it exists.
     */
    where: UserRecentTripWhereUniqueInput
    /**
     * In case the UserRecentTrip found by the `where` argument doesn't exist, create a new UserRecentTrip with this data.
     */
    create: XOR<UserRecentTripCreateInput, UserRecentTripUncheckedCreateInput>
    /**
     * In case the UserRecentTrip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRecentTripUpdateInput, UserRecentTripUncheckedUpdateInput>
  }

  /**
   * UserRecentTrip delete
   */
  export type UserRecentTripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
    /**
     * Filter which UserRecentTrip to delete.
     */
    where: UserRecentTripWhereUniqueInput
  }

  /**
   * UserRecentTrip deleteMany
   */
  export type UserRecentTripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRecentTrips to delete
     */
    where?: UserRecentTripWhereInput
    /**
     * Limit how many UserRecentTrips to delete.
     */
    limit?: number
  }

  /**
   * UserRecentTrip without action
   */
  export type UserRecentTripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentTrip
     */
    select?: UserRecentTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentTrip
     */
    omit?: UserRecentTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentTripInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    token: 'token',
    salt: 'salt',
    hash: 'hash',
    admin: 'admin',
    profilePhoto: 'profilePhoto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    image: 'image',
    participants: 'participants',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripCollaboratorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type TripCollaboratorScalarFieldEnum = (typeof TripCollaboratorScalarFieldEnum)[keyof typeof TripCollaboratorScalarFieldEnum]


  export const MemoryScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    type: 'type',
    content: 'content',
    position: 'position',
    size: 'size',
    zIndex: 'zIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemoryScalarFieldEnum = (typeof MemoryScalarFieldEnum)[keyof typeof MemoryScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    provider: 'provider',
    publicId: 'publicId',
    memoryId: 'memoryId',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const PlaceDataScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    name: 'name',
    address: 'address',
    coordinates: 'coordinates',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type PlaceDataScalarFieldEnum = (typeof PlaceDataScalarFieldEnum)[keyof typeof PlaceDataScalarFieldEnum]


  export const TodoItemScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    text: 'text',
    completed: 'completed',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoItemScalarFieldEnum = (typeof TodoItemScalarFieldEnum)[keyof typeof TodoItemScalarFieldEnum]


  export const DayScheduleScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    day: 'day',
    date: 'date',
    placeIds: 'placeIds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DayScheduleScalarFieldEnum = (typeof DayScheduleScalarFieldEnum)[keyof typeof DayScheduleScalarFieldEnum]


  export const ShareLinkScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    token: 'token',
    role: 'role',
    scope: 'scope',
    expiresAt: 'expiresAt',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ShareLinkScalarFieldEnum = (typeof ShareLinkScalarFieldEnum)[keyof typeof ShareLinkScalarFieldEnum]


  export const UserFavoriteTripScalarFieldEnum: {
    userId: 'userId',
    tripId: 'tripId'
  };

  export type UserFavoriteTripScalarFieldEnum = (typeof UserFavoriteTripScalarFieldEnum)[keyof typeof UserFavoriteTripScalarFieldEnum]


  export const UserRecentTripScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    viewedAt: 'viewedAt',
    createdAt: 'createdAt'
  };

  export type UserRecentTripScalarFieldEnum = (typeof UserRecentTripScalarFieldEnum)[keyof typeof UserRecentTripScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CollaboratorRole'
   */
  export type EnumCollaboratorRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorRole'>
    


  /**
   * Reference to a field of type 'CollaboratorRole[]'
   */
  export type ListEnumCollaboratorRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorRole[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    profilePhoto?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tripsOwned?: TripListRelationFilter
    collaborations?: TripCollaboratorListRelationFilter
    favoriteTrips?: UserFavoriteTripListRelationFilter
    recentTrips?: UserRecentTripListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    token?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    admin?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripsOwned?: TripOrderByRelationAggregateInput
    collaborations?: TripCollaboratorOrderByRelationAggregateInput
    favoriteTrips?: UserFavoriteTripOrderByRelationAggregateInput
    recentTrips?: UserRecentTripOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    token?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    profilePhoto?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tripsOwned?: TripListRelationFilter
    collaborations?: TripCollaboratorListRelationFilter
    favoriteTrips?: UserFavoriteTripListRelationFilter
    recentTrips?: UserRecentTripListRelationFilter
  }, "id" | "email" | "token">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    token?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    admin?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    token?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    profilePhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    image?: StringNullableFilter<"Trip"> | string | null
    participants?: StringNullableListFilter<"Trip">
    ownerId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memories?: MemoryListRelationFilter
    places?: PlaceDataListRelationFilter
    todoItems?: TodoItemListRelationFilter
    daySchedules?: DayScheduleListRelationFilter
    collaborators?: TripCollaboratorListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    favoritedBy?: UserFavoriteTripListRelationFilter
    viewedBy?: UserRecentTripListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    image?: SortOrderInput | SortOrder
    participants?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    memories?: MemoryOrderByRelationAggregateInput
    places?: PlaceDataOrderByRelationAggregateInput
    todoItems?: TodoItemOrderByRelationAggregateInput
    daySchedules?: DayScheduleOrderByRelationAggregateInput
    collaborators?: TripCollaboratorOrderByRelationAggregateInput
    shareLinks?: ShareLinkOrderByRelationAggregateInput
    favoritedBy?: UserFavoriteTripOrderByRelationAggregateInput
    viewedBy?: UserRecentTripOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    title?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    image?: StringNullableFilter<"Trip"> | string | null
    participants?: StringNullableListFilter<"Trip">
    ownerId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memories?: MemoryListRelationFilter
    places?: PlaceDataListRelationFilter
    todoItems?: TodoItemListRelationFilter
    daySchedules?: DayScheduleListRelationFilter
    collaborators?: TripCollaboratorListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    favoritedBy?: UserFavoriteTripListRelationFilter
    viewedBy?: UserRecentTripListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    image?: SortOrderInput | SortOrder
    participants?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    participants?: StringNullableListFilter<"Trip">
    ownerId?: StringWithAggregatesFilter<"Trip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type TripCollaboratorWhereInput = {
    AND?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    OR?: TripCollaboratorWhereInput[]
    NOT?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    id?: StringFilter<"TripCollaborator"> | string
    userId?: StringFilter<"TripCollaborator"> | string
    tripId?: StringFilter<"TripCollaborator"> | string
    role?: EnumCollaboratorRoleFilter<"TripCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type TripCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tripId?: TripCollaboratorUserIdTripIdCompoundUniqueInput
    AND?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    OR?: TripCollaboratorWhereInput[]
    NOT?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    userId?: StringFilter<"TripCollaborator"> | string
    tripId?: StringFilter<"TripCollaborator"> | string
    role?: EnumCollaboratorRoleFilter<"TripCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "userId_tripId">

  export type TripCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: TripCollaboratorCountOrderByAggregateInput
    _max?: TripCollaboratorMaxOrderByAggregateInput
    _min?: TripCollaboratorMinOrderByAggregateInput
  }

  export type TripCollaboratorScalarWhereWithAggregatesInput = {
    AND?: TripCollaboratorScalarWhereWithAggregatesInput | TripCollaboratorScalarWhereWithAggregatesInput[]
    OR?: TripCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: TripCollaboratorScalarWhereWithAggregatesInput | TripCollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripCollaborator"> | string
    userId?: StringWithAggregatesFilter<"TripCollaborator"> | string
    tripId?: StringWithAggregatesFilter<"TripCollaborator"> | string
    role?: EnumCollaboratorRoleWithAggregatesFilter<"TripCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeWithAggregatesFilter<"TripCollaborator"> | Date | string
  }

  export type MemoryWhereInput = {
    AND?: MemoryWhereInput | MemoryWhereInput[]
    OR?: MemoryWhereInput[]
    NOT?: MemoryWhereInput | MemoryWhereInput[]
    id?: StringFilter<"Memory"> | string
    tripId?: StringFilter<"Memory"> | string
    type?: StringFilter<"Memory"> | string
    content?: StringFilter<"Memory"> | string
    position?: JsonFilter<"Memory">
    size?: JsonFilter<"Memory">
    zIndex?: IntFilter<"Memory"> | number
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    media?: MediaListRelationFilter
  }

  export type MemoryOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    position?: SortOrder
    size?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
  }

  export type MemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemoryWhereInput | MemoryWhereInput[]
    OR?: MemoryWhereInput[]
    NOT?: MemoryWhereInput | MemoryWhereInput[]
    tripId?: StringFilter<"Memory"> | string
    type?: StringFilter<"Memory"> | string
    content?: StringFilter<"Memory"> | string
    position?: JsonFilter<"Memory">
    size?: JsonFilter<"Memory">
    zIndex?: IntFilter<"Memory"> | number
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    media?: MediaListRelationFilter
  }, "id">

  export type MemoryOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    position?: SortOrder
    size?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemoryCountOrderByAggregateInput
    _avg?: MemoryAvgOrderByAggregateInput
    _max?: MemoryMaxOrderByAggregateInput
    _min?: MemoryMinOrderByAggregateInput
    _sum?: MemorySumOrderByAggregateInput
  }

  export type MemoryScalarWhereWithAggregatesInput = {
    AND?: MemoryScalarWhereWithAggregatesInput | MemoryScalarWhereWithAggregatesInput[]
    OR?: MemoryScalarWhereWithAggregatesInput[]
    NOT?: MemoryScalarWhereWithAggregatesInput | MemoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Memory"> | string
    tripId?: StringWithAggregatesFilter<"Memory"> | string
    type?: StringWithAggregatesFilter<"Memory"> | string
    content?: StringWithAggregatesFilter<"Memory"> | string
    position?: JsonWithAggregatesFilter<"Memory">
    size?: JsonWithAggregatesFilter<"Memory">
    zIndex?: IntWithAggregatesFilter<"Memory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Memory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Memory"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    provider?: StringNullableFilter<"Media"> | string | null
    publicId?: StringNullableFilter<"Media"> | string | null
    memoryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    memory?: XOR<MemoryScalarRelationFilter, MemoryWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    provider?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    memoryId?: SortOrder
    createdAt?: SortOrder
    memory?: MemoryOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    url?: StringFilter<"Media"> | string
    provider?: StringNullableFilter<"Media"> | string | null
    publicId?: StringNullableFilter<"Media"> | string | null
    memoryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    memory?: XOR<MemoryScalarRelationFilter, MemoryWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    provider?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    memoryId?: SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    provider?: StringNullableWithAggregatesFilter<"Media"> | string | null
    publicId?: StringNullableWithAggregatesFilter<"Media"> | string | null
    memoryId?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type PlaceDataWhereInput = {
    AND?: PlaceDataWhereInput | PlaceDataWhereInput[]
    OR?: PlaceDataWhereInput[]
    NOT?: PlaceDataWhereInput | PlaceDataWhereInput[]
    id?: StringFilter<"PlaceData"> | string
    tripId?: StringFilter<"PlaceData"> | string
    name?: StringFilter<"PlaceData"> | string
    address?: StringNullableFilter<"PlaceData"> | string | null
    coordinates?: JsonNullableFilter<"PlaceData">
    category?: StringNullableFilter<"PlaceData"> | string | null
    description?: StringNullableFilter<"PlaceData"> | string | null
    createdAt?: DateTimeFilter<"PlaceData"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type PlaceDataOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type PlaceDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceDataWhereInput | PlaceDataWhereInput[]
    OR?: PlaceDataWhereInput[]
    NOT?: PlaceDataWhereInput | PlaceDataWhereInput[]
    tripId?: StringFilter<"PlaceData"> | string
    name?: StringFilter<"PlaceData"> | string
    address?: StringNullableFilter<"PlaceData"> | string | null
    coordinates?: JsonNullableFilter<"PlaceData">
    category?: StringNullableFilter<"PlaceData"> | string | null
    description?: StringNullableFilter<"PlaceData"> | string | null
    createdAt?: DateTimeFilter<"PlaceData"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type PlaceDataOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PlaceDataCountOrderByAggregateInput
    _max?: PlaceDataMaxOrderByAggregateInput
    _min?: PlaceDataMinOrderByAggregateInput
  }

  export type PlaceDataScalarWhereWithAggregatesInput = {
    AND?: PlaceDataScalarWhereWithAggregatesInput | PlaceDataScalarWhereWithAggregatesInput[]
    OR?: PlaceDataScalarWhereWithAggregatesInput[]
    NOT?: PlaceDataScalarWhereWithAggregatesInput | PlaceDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaceData"> | string
    tripId?: StringWithAggregatesFilter<"PlaceData"> | string
    name?: StringWithAggregatesFilter<"PlaceData"> | string
    address?: StringNullableWithAggregatesFilter<"PlaceData"> | string | null
    coordinates?: JsonNullableWithAggregatesFilter<"PlaceData">
    category?: StringNullableWithAggregatesFilter<"PlaceData"> | string | null
    description?: StringNullableWithAggregatesFilter<"PlaceData"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PlaceData"> | Date | string
  }

  export type TodoItemWhereInput = {
    AND?: TodoItemWhereInput | TodoItemWhereInput[]
    OR?: TodoItemWhereInput[]
    NOT?: TodoItemWhereInput | TodoItemWhereInput[]
    id?: StringFilter<"TodoItem"> | string
    tripId?: StringFilter<"TodoItem"> | string
    text?: StringFilter<"TodoItem"> | string
    completed?: BoolFilter<"TodoItem"> | boolean
    order?: IntNullableFilter<"TodoItem"> | number | null
    createdAt?: DateTimeFilter<"TodoItem"> | Date | string
    updatedAt?: DateTimeFilter<"TodoItem"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TodoItemOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TodoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodoItemWhereInput | TodoItemWhereInput[]
    OR?: TodoItemWhereInput[]
    NOT?: TodoItemWhereInput | TodoItemWhereInput[]
    tripId?: StringFilter<"TodoItem"> | string
    text?: StringFilter<"TodoItem"> | string
    completed?: BoolFilter<"TodoItem"> | boolean
    order?: IntNullableFilter<"TodoItem"> | number | null
    createdAt?: DateTimeFilter<"TodoItem"> | Date | string
    updatedAt?: DateTimeFilter<"TodoItem"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TodoItemOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoItemCountOrderByAggregateInput
    _avg?: TodoItemAvgOrderByAggregateInput
    _max?: TodoItemMaxOrderByAggregateInput
    _min?: TodoItemMinOrderByAggregateInput
    _sum?: TodoItemSumOrderByAggregateInput
  }

  export type TodoItemScalarWhereWithAggregatesInput = {
    AND?: TodoItemScalarWhereWithAggregatesInput | TodoItemScalarWhereWithAggregatesInput[]
    OR?: TodoItemScalarWhereWithAggregatesInput[]
    NOT?: TodoItemScalarWhereWithAggregatesInput | TodoItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TodoItem"> | string
    tripId?: StringWithAggregatesFilter<"TodoItem"> | string
    text?: StringWithAggregatesFilter<"TodoItem"> | string
    completed?: BoolWithAggregatesFilter<"TodoItem"> | boolean
    order?: IntNullableWithAggregatesFilter<"TodoItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TodoItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TodoItem"> | Date | string
  }

  export type DayScheduleWhereInput = {
    AND?: DayScheduleWhereInput | DayScheduleWhereInput[]
    OR?: DayScheduleWhereInput[]
    NOT?: DayScheduleWhereInput | DayScheduleWhereInput[]
    id?: StringFilter<"DaySchedule"> | string
    tripId?: StringFilter<"DaySchedule"> | string
    day?: IntFilter<"DaySchedule"> | number
    date?: DateTimeNullableFilter<"DaySchedule"> | Date | string | null
    placeIds?: StringNullableListFilter<"DaySchedule">
    createdAt?: DateTimeFilter<"DaySchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DaySchedule"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type DayScheduleOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    day?: SortOrder
    date?: SortOrderInput | SortOrder
    placeIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type DayScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DayScheduleWhereInput | DayScheduleWhereInput[]
    OR?: DayScheduleWhereInput[]
    NOT?: DayScheduleWhereInput | DayScheduleWhereInput[]
    tripId?: StringFilter<"DaySchedule"> | string
    day?: IntFilter<"DaySchedule"> | number
    date?: DateTimeNullableFilter<"DaySchedule"> | Date | string | null
    placeIds?: StringNullableListFilter<"DaySchedule">
    createdAt?: DateTimeFilter<"DaySchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DaySchedule"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type DayScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    day?: SortOrder
    date?: SortOrderInput | SortOrder
    placeIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DayScheduleCountOrderByAggregateInput
    _avg?: DayScheduleAvgOrderByAggregateInput
    _max?: DayScheduleMaxOrderByAggregateInput
    _min?: DayScheduleMinOrderByAggregateInput
    _sum?: DayScheduleSumOrderByAggregateInput
  }

  export type DayScheduleScalarWhereWithAggregatesInput = {
    AND?: DayScheduleScalarWhereWithAggregatesInput | DayScheduleScalarWhereWithAggregatesInput[]
    OR?: DayScheduleScalarWhereWithAggregatesInput[]
    NOT?: DayScheduleScalarWhereWithAggregatesInput | DayScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DaySchedule"> | string
    tripId?: StringWithAggregatesFilter<"DaySchedule"> | string
    day?: IntWithAggregatesFilter<"DaySchedule"> | number
    date?: DateTimeNullableWithAggregatesFilter<"DaySchedule"> | Date | string | null
    placeIds?: StringNullableListFilter<"DaySchedule">
    createdAt?: DateTimeWithAggregatesFilter<"DaySchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DaySchedule"> | Date | string
  }

  export type ShareLinkWhereInput = {
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    tripId?: StringFilter<"ShareLink"> | string
    token?: StringFilter<"ShareLink"> | string
    role?: EnumCollaboratorRoleFilter<"ShareLink"> | $Enums.CollaboratorRole
    scope?: StringFilter<"ShareLink"> | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    createdBy?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type ShareLinkOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    token?: SortOrder
    role?: SortOrder
    scope?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type ShareLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    tripId?: StringFilter<"ShareLink"> | string
    role?: EnumCollaboratorRoleFilter<"ShareLink"> | $Enums.CollaboratorRole
    scope?: StringFilter<"ShareLink"> | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    createdBy?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "token">

  export type ShareLinkOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    token?: SortOrder
    role?: SortOrder
    scope?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ShareLinkCountOrderByAggregateInput
    _max?: ShareLinkMaxOrderByAggregateInput
    _min?: ShareLinkMinOrderByAggregateInput
  }

  export type ShareLinkScalarWhereWithAggregatesInput = {
    AND?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    OR?: ShareLinkScalarWhereWithAggregatesInput[]
    NOT?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareLink"> | string
    tripId?: StringWithAggregatesFilter<"ShareLink"> | string
    token?: StringWithAggregatesFilter<"ShareLink"> | string
    role?: EnumCollaboratorRoleWithAggregatesFilter<"ShareLink"> | $Enums.CollaboratorRole
    scope?: StringWithAggregatesFilter<"ShareLink"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ShareLink"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"ShareLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
  }

  export type UserFavoriteTripWhereInput = {
    AND?: UserFavoriteTripWhereInput | UserFavoriteTripWhereInput[]
    OR?: UserFavoriteTripWhereInput[]
    NOT?: UserFavoriteTripWhereInput | UserFavoriteTripWhereInput[]
    userId?: StringFilter<"UserFavoriteTrip"> | string
    tripId?: StringFilter<"UserFavoriteTrip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type UserFavoriteTripOrderByWithRelationInput = {
    userId?: SortOrder
    tripId?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type UserFavoriteTripWhereUniqueInput = Prisma.AtLeast<{
    userId_tripId?: UserFavoriteTripUserIdTripIdCompoundUniqueInput
    AND?: UserFavoriteTripWhereInput | UserFavoriteTripWhereInput[]
    OR?: UserFavoriteTripWhereInput[]
    NOT?: UserFavoriteTripWhereInput | UserFavoriteTripWhereInput[]
    userId?: StringFilter<"UserFavoriteTrip"> | string
    tripId?: StringFilter<"UserFavoriteTrip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "userId_tripId">

  export type UserFavoriteTripOrderByWithAggregationInput = {
    userId?: SortOrder
    tripId?: SortOrder
    _count?: UserFavoriteTripCountOrderByAggregateInput
    _max?: UserFavoriteTripMaxOrderByAggregateInput
    _min?: UserFavoriteTripMinOrderByAggregateInput
  }

  export type UserFavoriteTripScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteTripScalarWhereWithAggregatesInput | UserFavoriteTripScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteTripScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteTripScalarWhereWithAggregatesInput | UserFavoriteTripScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserFavoriteTrip"> | string
    tripId?: StringWithAggregatesFilter<"UserFavoriteTrip"> | string
  }

  export type UserRecentTripWhereInput = {
    AND?: UserRecentTripWhereInput | UserRecentTripWhereInput[]
    OR?: UserRecentTripWhereInput[]
    NOT?: UserRecentTripWhereInput | UserRecentTripWhereInput[]
    id?: StringFilter<"UserRecentTrip"> | string
    userId?: StringFilter<"UserRecentTrip"> | string
    tripId?: StringFilter<"UserRecentTrip"> | string
    viewedAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
    createdAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type UserRecentTripOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    viewedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type UserRecentTripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tripId?: UserRecentTripUserIdTripIdCompoundUniqueInput
    AND?: UserRecentTripWhereInput | UserRecentTripWhereInput[]
    OR?: UserRecentTripWhereInput[]
    NOT?: UserRecentTripWhereInput | UserRecentTripWhereInput[]
    userId?: StringFilter<"UserRecentTrip"> | string
    tripId?: StringFilter<"UserRecentTrip"> | string
    viewedAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
    createdAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "userId_tripId">

  export type UserRecentTripOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    viewedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserRecentTripCountOrderByAggregateInput
    _max?: UserRecentTripMaxOrderByAggregateInput
    _min?: UserRecentTripMinOrderByAggregateInput
  }

  export type UserRecentTripScalarWhereWithAggregatesInput = {
    AND?: UserRecentTripScalarWhereWithAggregatesInput | UserRecentTripScalarWhereWithAggregatesInput[]
    OR?: UserRecentTripScalarWhereWithAggregatesInput[]
    NOT?: UserRecentTripScalarWhereWithAggregatesInput | UserRecentTripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRecentTrip"> | string
    userId?: StringWithAggregatesFilter<"UserRecentTrip"> | string
    tripId?: StringWithAggregatesFilter<"UserRecentTrip"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"UserRecentTrip"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRecentTrip"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripUncheckedCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripUncheckedCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUncheckedUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorCreateInput = {
    id?: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCollaborationsInput
    trip: TripCreateNestedOneWithoutCollaboratorsInput
  }

  export type TripCollaboratorUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type TripCollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
    trip?: TripUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorCreateManyInput = {
    id?: string
    userId: string
    tripId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type TripCollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCreateInput = {
    id?: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutMemoriesInput
    media?: MediaCreateNestedManyWithoutMemoryInput
  }

  export type MemoryUncheckedCreateInput = {
    id?: string
    tripId: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutMemoryInput
  }

  export type MemoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutMemoriesNestedInput
    media?: MediaUpdateManyWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutMemoryNestedInput
  }

  export type MemoryCreateManyInput = {
    id?: string
    tripId: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    createdAt?: Date | string
    memory: MemoryCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    memoryId: string
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memory?: MemoryUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    memoryId: string
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataCreateInput = {
    id?: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutPlacesInput
  }

  export type PlaceDataUncheckedCreateInput = {
    id?: string
    tripId: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type PlaceDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type PlaceDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataCreateManyInput = {
    id?: string
    tripId: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type PlaceDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemCreateInput = {
    id?: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutTodoItemsInput
  }

  export type TodoItemUncheckedCreateInput = {
    id?: string
    tripId: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTodoItemsNestedInput
  }

  export type TodoItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemCreateManyInput = {
    id?: string
    tripId: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleCreateInput = {
    id?: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutDaySchedulesInput
  }

  export type DayScheduleUncheckedCreateInput = {
    id?: string
    tripId: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutDaySchedulesNestedInput
  }

  export type DayScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleCreateManyInput = {
    id?: string
    tripId: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateInput = {
    id?: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutShareLinksInput
  }

  export type ShareLinkUncheckedCreateInput = {
    id?: string
    tripId: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type ShareLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutShareLinksNestedInput
  }

  export type ShareLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateManyInput = {
    id?: string
    tripId: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type ShareLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteTripCreateInput = {
    user: UserCreateNestedOneWithoutFavoriteTripsInput
    trip: TripCreateNestedOneWithoutFavoritedByInput
  }

  export type UserFavoriteTripUncheckedCreateInput = {
    userId: string
    tripId: string
  }

  export type UserFavoriteTripUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavoriteTripsNestedInput
    trip?: TripUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type UserFavoriteTripUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavoriteTripCreateManyInput = {
    userId: string
    tripId: string
  }

  export type UserFavoriteTripUpdateManyMutationInput = {

  }

  export type UserFavoriteTripUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRecentTripCreateInput = {
    id?: string
    viewedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecentTripsInput
    trip: TripCreateNestedOneWithoutViewedByInput
  }

  export type UserRecentTripUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRecentTripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecentTripsNestedInput
    trip?: TripUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type UserRecentTripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentTripCreateManyInput = {
    id?: string
    userId: string
    tripId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRecentTripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentTripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TripCollaboratorListRelationFilter = {
    every?: TripCollaboratorWhereInput
    some?: TripCollaboratorWhereInput
    none?: TripCollaboratorWhereInput
  }

  export type UserFavoriteTripListRelationFilter = {
    every?: UserFavoriteTripWhereInput
    some?: UserFavoriteTripWhereInput
    none?: UserFavoriteTripWhereInput
  }

  export type UserRecentTripListRelationFilter = {
    every?: UserRecentTripWhereInput
    some?: UserRecentTripWhereInput
    none?: UserRecentTripWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavoriteTripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRecentTripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    token?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    admin?: SortOrder
    profilePhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    token?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    admin?: SortOrder
    profilePhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    token?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    admin?: SortOrder
    profilePhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MemoryListRelationFilter = {
    every?: MemoryWhereInput
    some?: MemoryWhereInput
    none?: MemoryWhereInput
  }

  export type PlaceDataListRelationFilter = {
    every?: PlaceDataWhereInput
    some?: PlaceDataWhereInput
    none?: PlaceDataWhereInput
  }

  export type TodoItemListRelationFilter = {
    every?: TodoItemWhereInput
    some?: TodoItemWhereInput
    none?: TodoItemWhereInput
  }

  export type DayScheduleListRelationFilter = {
    every?: DayScheduleWhereInput
    some?: DayScheduleWhereInput
    none?: DayScheduleWhereInput
  }

  export type ShareLinkListRelationFilter = {
    every?: ShareLinkWhereInput
    some?: ShareLinkWhereInput
    none?: ShareLinkWhereInput
  }

  export type MemoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    image?: SortOrder
    participants?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCollaboratorRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorRoleFilter<$PrismaModel> | $Enums.CollaboratorRole
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripCollaboratorUserIdTripIdCompoundUniqueInput = {
    userId: string
    tripId: string
  }

  export type TripCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TripCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TripCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCollaboratorRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemoryCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    position?: SortOrder
    size?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryAvgOrderByAggregateInput = {
    zIndex?: SortOrder
  }

  export type MemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemorySumOrderByAggregateInput = {
    zIndex?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MemoryScalarRelationFilter = {
    is?: MemoryWhereInput
    isNot?: MemoryWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    memoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    memoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    memoryId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlaceDataCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    coordinates?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaceDataMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaceDataMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TodoItemCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TodoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoItemMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DayScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    day?: SortOrder
    date?: SortOrder
    placeIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayScheduleAvgOrderByAggregateInput = {
    day?: SortOrder
  }

  export type DayScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    day?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    day?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayScheduleSumOrderByAggregateInput = {
    day?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ShareLinkCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    token?: SortOrder
    role?: SortOrder
    scope?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    token?: SortOrder
    role?: SortOrder
    scope?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareLinkMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    token?: SortOrder
    role?: SortOrder
    scope?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteTripUserIdTripIdCompoundUniqueInput = {
    userId: string
    tripId: string
  }

  export type UserFavoriteTripCountOrderByAggregateInput = {
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UserFavoriteTripMaxOrderByAggregateInput = {
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UserFavoriteTripMinOrderByAggregateInput = {
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UserRecentTripUserIdTripIdCompoundUniqueInput = {
    userId: string
    tripId: string
  }

  export type UserRecentTripCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    viewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRecentTripMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    viewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRecentTripMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    viewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TripCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type UserFavoriteTripCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput> | UserFavoriteTripCreateWithoutUserInput[] | UserFavoriteTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutUserInput | UserFavoriteTripCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteTripCreateManyUserInputEnvelope
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
  }

  export type UserRecentTripCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput> | UserRecentTripCreateWithoutUserInput[] | UserRecentTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutUserInput | UserRecentTripCreateOrConnectWithoutUserInput[]
    createMany?: UserRecentTripCreateManyUserInputEnvelope
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type UserFavoriteTripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput> | UserFavoriteTripCreateWithoutUserInput[] | UserFavoriteTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutUserInput | UserFavoriteTripCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteTripCreateManyUserInputEnvelope
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
  }

  export type UserRecentTripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput> | UserRecentTripCreateWithoutUserInput[] | UserRecentTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutUserInput | UserRecentTripCreateOrConnectWithoutUserInput[]
    createMany?: UserRecentTripCreateManyUserInputEnvelope
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutOwnerInput | TripUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutOwnerInput | TripUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TripUpdateManyWithWhereWithoutOwnerInput | TripUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutUserInput | TripCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutUserInput | TripCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutUserInput | TripCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type UserFavoriteTripUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput> | UserFavoriteTripCreateWithoutUserInput[] | UserFavoriteTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutUserInput | UserFavoriteTripCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteTripUpsertWithWhereUniqueWithoutUserInput | UserFavoriteTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteTripCreateManyUserInputEnvelope
    set?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    disconnect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    delete?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    update?: UserFavoriteTripUpdateWithWhereUniqueWithoutUserInput | UserFavoriteTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteTripUpdateManyWithWhereWithoutUserInput | UserFavoriteTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
  }

  export type UserRecentTripUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput> | UserRecentTripCreateWithoutUserInput[] | UserRecentTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutUserInput | UserRecentTripCreateOrConnectWithoutUserInput[]
    upsert?: UserRecentTripUpsertWithWhereUniqueWithoutUserInput | UserRecentTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRecentTripCreateManyUserInputEnvelope
    set?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    disconnect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    delete?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    update?: UserRecentTripUpdateWithWhereUniqueWithoutUserInput | UserRecentTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRecentTripUpdateManyWithWhereWithoutUserInput | UserRecentTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutOwnerInput | TripUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutOwnerInput | TripUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TripUpdateManyWithWhereWithoutOwnerInput | TripUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutUserInput | TripCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutUserInput | TripCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutUserInput | TripCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type UserFavoriteTripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput> | UserFavoriteTripCreateWithoutUserInput[] | UserFavoriteTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutUserInput | UserFavoriteTripCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteTripUpsertWithWhereUniqueWithoutUserInput | UserFavoriteTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteTripCreateManyUserInputEnvelope
    set?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    disconnect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    delete?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    update?: UserFavoriteTripUpdateWithWhereUniqueWithoutUserInput | UserFavoriteTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteTripUpdateManyWithWhereWithoutUserInput | UserFavoriteTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
  }

  export type UserRecentTripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput> | UserRecentTripCreateWithoutUserInput[] | UserRecentTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutUserInput | UserRecentTripCreateOrConnectWithoutUserInput[]
    upsert?: UserRecentTripUpsertWithWhereUniqueWithoutUserInput | UserRecentTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRecentTripCreateManyUserInputEnvelope
    set?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    disconnect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    delete?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    update?: UserRecentTripUpdateWithWhereUniqueWithoutUserInput | UserRecentTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRecentTripUpdateManyWithWhereWithoutUserInput | UserRecentTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
  }

  export type TripCreateparticipantsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTripsOwnedInput = {
    create?: XOR<UserCreateWithoutTripsOwnedInput, UserUncheckedCreateWithoutTripsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsOwnedInput
    connect?: UserWhereUniqueInput
  }

  export type MemoryCreateNestedManyWithoutTripInput = {
    create?: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput> | MemoryCreateWithoutTripInput[] | MemoryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutTripInput | MemoryCreateOrConnectWithoutTripInput[]
    createMany?: MemoryCreateManyTripInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type PlaceDataCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput> | PlaceDataCreateWithoutTripInput[] | PlaceDataUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceDataCreateOrConnectWithoutTripInput | PlaceDataCreateOrConnectWithoutTripInput[]
    createMany?: PlaceDataCreateManyTripInputEnvelope
    connect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
  }

  export type TodoItemCreateNestedManyWithoutTripInput = {
    create?: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput> | TodoItemCreateWithoutTripInput[] | TodoItemUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TodoItemCreateOrConnectWithoutTripInput | TodoItemCreateOrConnectWithoutTripInput[]
    createMany?: TodoItemCreateManyTripInputEnvelope
    connect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
  }

  export type DayScheduleCreateNestedManyWithoutTripInput = {
    create?: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput> | DayScheduleCreateWithoutTripInput[] | DayScheduleUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayScheduleCreateOrConnectWithoutTripInput | DayScheduleCreateOrConnectWithoutTripInput[]
    createMany?: DayScheduleCreateManyTripInputEnvelope
    connect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
  }

  export type TripCollaboratorCreateNestedManyWithoutTripInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type ShareLinkCreateNestedManyWithoutTripInput = {
    create?: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput> | ShareLinkCreateWithoutTripInput[] | ShareLinkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutTripInput | ShareLinkCreateOrConnectWithoutTripInput[]
    createMany?: ShareLinkCreateManyTripInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type UserFavoriteTripCreateNestedManyWithoutTripInput = {
    create?: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput> | UserFavoriteTripCreateWithoutTripInput[] | UserFavoriteTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutTripInput | UserFavoriteTripCreateOrConnectWithoutTripInput[]
    createMany?: UserFavoriteTripCreateManyTripInputEnvelope
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
  }

  export type UserRecentTripCreateNestedManyWithoutTripInput = {
    create?: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput> | UserRecentTripCreateWithoutTripInput[] | UserRecentTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutTripInput | UserRecentTripCreateOrConnectWithoutTripInput[]
    createMany?: UserRecentTripCreateManyTripInputEnvelope
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
  }

  export type MemoryUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput> | MemoryCreateWithoutTripInput[] | MemoryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutTripInput | MemoryCreateOrConnectWithoutTripInput[]
    createMany?: MemoryCreateManyTripInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type PlaceDataUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput> | PlaceDataCreateWithoutTripInput[] | PlaceDataUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceDataCreateOrConnectWithoutTripInput | PlaceDataCreateOrConnectWithoutTripInput[]
    createMany?: PlaceDataCreateManyTripInputEnvelope
    connect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
  }

  export type TodoItemUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput> | TodoItemCreateWithoutTripInput[] | TodoItemUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TodoItemCreateOrConnectWithoutTripInput | TodoItemCreateOrConnectWithoutTripInput[]
    createMany?: TodoItemCreateManyTripInputEnvelope
    connect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
  }

  export type DayScheduleUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput> | DayScheduleCreateWithoutTripInput[] | DayScheduleUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayScheduleCreateOrConnectWithoutTripInput | DayScheduleCreateOrConnectWithoutTripInput[]
    createMany?: DayScheduleCreateManyTripInputEnvelope
    connect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
  }

  export type TripCollaboratorUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type ShareLinkUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput> | ShareLinkCreateWithoutTripInput[] | ShareLinkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutTripInput | ShareLinkCreateOrConnectWithoutTripInput[]
    createMany?: ShareLinkCreateManyTripInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput> | UserFavoriteTripCreateWithoutTripInput[] | UserFavoriteTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutTripInput | UserFavoriteTripCreateOrConnectWithoutTripInput[]
    createMany?: UserFavoriteTripCreateManyTripInputEnvelope
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
  }

  export type UserRecentTripUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput> | UserRecentTripCreateWithoutTripInput[] | UserRecentTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutTripInput | UserRecentTripCreateOrConnectWithoutTripInput[]
    createMany?: UserRecentTripCreateManyTripInputEnvelope
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
  }

  export type TripUpdateparticipantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTripsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutTripsOwnedInput, UserUncheckedCreateWithoutTripsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsOwnedInput
    upsert?: UserUpsertWithoutTripsOwnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsOwnedInput, UserUpdateWithoutTripsOwnedInput>, UserUncheckedUpdateWithoutTripsOwnedInput>
  }

  export type MemoryUpdateManyWithoutTripNestedInput = {
    create?: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput> | MemoryCreateWithoutTripInput[] | MemoryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutTripInput | MemoryCreateOrConnectWithoutTripInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutTripInput | MemoryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: MemoryCreateManyTripInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutTripInput | MemoryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutTripInput | MemoryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type PlaceDataUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput> | PlaceDataCreateWithoutTripInput[] | PlaceDataUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceDataCreateOrConnectWithoutTripInput | PlaceDataCreateOrConnectWithoutTripInput[]
    upsert?: PlaceDataUpsertWithWhereUniqueWithoutTripInput | PlaceDataUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceDataCreateManyTripInputEnvelope
    set?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    disconnect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    delete?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    connect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    update?: PlaceDataUpdateWithWhereUniqueWithoutTripInput | PlaceDataUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceDataUpdateManyWithWhereWithoutTripInput | PlaceDataUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceDataScalarWhereInput | PlaceDataScalarWhereInput[]
  }

  export type TodoItemUpdateManyWithoutTripNestedInput = {
    create?: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput> | TodoItemCreateWithoutTripInput[] | TodoItemUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TodoItemCreateOrConnectWithoutTripInput | TodoItemCreateOrConnectWithoutTripInput[]
    upsert?: TodoItemUpsertWithWhereUniqueWithoutTripInput | TodoItemUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TodoItemCreateManyTripInputEnvelope
    set?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    disconnect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    delete?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    connect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    update?: TodoItemUpdateWithWhereUniqueWithoutTripInput | TodoItemUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TodoItemUpdateManyWithWhereWithoutTripInput | TodoItemUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TodoItemScalarWhereInput | TodoItemScalarWhereInput[]
  }

  export type DayScheduleUpdateManyWithoutTripNestedInput = {
    create?: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput> | DayScheduleCreateWithoutTripInput[] | DayScheduleUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayScheduleCreateOrConnectWithoutTripInput | DayScheduleCreateOrConnectWithoutTripInput[]
    upsert?: DayScheduleUpsertWithWhereUniqueWithoutTripInput | DayScheduleUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DayScheduleCreateManyTripInputEnvelope
    set?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    disconnect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    delete?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    connect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    update?: DayScheduleUpdateWithWhereUniqueWithoutTripInput | DayScheduleUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DayScheduleUpdateManyWithWhereWithoutTripInput | DayScheduleUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DayScheduleScalarWhereInput | DayScheduleScalarWhereInput[]
  }

  export type TripCollaboratorUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutTripInput | TripCollaboratorUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutTripInput | TripCollaboratorUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutTripInput | TripCollaboratorUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type ShareLinkUpdateManyWithoutTripNestedInput = {
    create?: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput> | ShareLinkCreateWithoutTripInput[] | ShareLinkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutTripInput | ShareLinkCreateOrConnectWithoutTripInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutTripInput | ShareLinkUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ShareLinkCreateManyTripInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutTripInput | ShareLinkUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutTripInput | ShareLinkUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type UserFavoriteTripUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput> | UserFavoriteTripCreateWithoutTripInput[] | UserFavoriteTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutTripInput | UserFavoriteTripCreateOrConnectWithoutTripInput[]
    upsert?: UserFavoriteTripUpsertWithWhereUniqueWithoutTripInput | UserFavoriteTripUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UserFavoriteTripCreateManyTripInputEnvelope
    set?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    disconnect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    delete?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    update?: UserFavoriteTripUpdateWithWhereUniqueWithoutTripInput | UserFavoriteTripUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserFavoriteTripUpdateManyWithWhereWithoutTripInput | UserFavoriteTripUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
  }

  export type UserRecentTripUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput> | UserRecentTripCreateWithoutTripInput[] | UserRecentTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutTripInput | UserRecentTripCreateOrConnectWithoutTripInput[]
    upsert?: UserRecentTripUpsertWithWhereUniqueWithoutTripInput | UserRecentTripUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UserRecentTripCreateManyTripInputEnvelope
    set?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    disconnect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    delete?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    update?: UserRecentTripUpdateWithWhereUniqueWithoutTripInput | UserRecentTripUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserRecentTripUpdateManyWithWhereWithoutTripInput | UserRecentTripUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
  }

  export type MemoryUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput> | MemoryCreateWithoutTripInput[] | MemoryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutTripInput | MemoryCreateOrConnectWithoutTripInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutTripInput | MemoryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: MemoryCreateManyTripInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutTripInput | MemoryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutTripInput | MemoryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type PlaceDataUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput> | PlaceDataCreateWithoutTripInput[] | PlaceDataUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceDataCreateOrConnectWithoutTripInput | PlaceDataCreateOrConnectWithoutTripInput[]
    upsert?: PlaceDataUpsertWithWhereUniqueWithoutTripInput | PlaceDataUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceDataCreateManyTripInputEnvelope
    set?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    disconnect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    delete?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    connect?: PlaceDataWhereUniqueInput | PlaceDataWhereUniqueInput[]
    update?: PlaceDataUpdateWithWhereUniqueWithoutTripInput | PlaceDataUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceDataUpdateManyWithWhereWithoutTripInput | PlaceDataUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceDataScalarWhereInput | PlaceDataScalarWhereInput[]
  }

  export type TodoItemUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput> | TodoItemCreateWithoutTripInput[] | TodoItemUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TodoItemCreateOrConnectWithoutTripInput | TodoItemCreateOrConnectWithoutTripInput[]
    upsert?: TodoItemUpsertWithWhereUniqueWithoutTripInput | TodoItemUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TodoItemCreateManyTripInputEnvelope
    set?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    disconnect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    delete?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    connect?: TodoItemWhereUniqueInput | TodoItemWhereUniqueInput[]
    update?: TodoItemUpdateWithWhereUniqueWithoutTripInput | TodoItemUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TodoItemUpdateManyWithWhereWithoutTripInput | TodoItemUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TodoItemScalarWhereInput | TodoItemScalarWhereInput[]
  }

  export type DayScheduleUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput> | DayScheduleCreateWithoutTripInput[] | DayScheduleUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayScheduleCreateOrConnectWithoutTripInput | DayScheduleCreateOrConnectWithoutTripInput[]
    upsert?: DayScheduleUpsertWithWhereUniqueWithoutTripInput | DayScheduleUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DayScheduleCreateManyTripInputEnvelope
    set?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    disconnect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    delete?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    connect?: DayScheduleWhereUniqueInput | DayScheduleWhereUniqueInput[]
    update?: DayScheduleUpdateWithWhereUniqueWithoutTripInput | DayScheduleUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DayScheduleUpdateManyWithWhereWithoutTripInput | DayScheduleUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DayScheduleScalarWhereInput | DayScheduleScalarWhereInput[]
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutTripInput | TripCollaboratorUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutTripInput | TripCollaboratorUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutTripInput | TripCollaboratorUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type ShareLinkUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput> | ShareLinkCreateWithoutTripInput[] | ShareLinkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutTripInput | ShareLinkCreateOrConnectWithoutTripInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutTripInput | ShareLinkUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ShareLinkCreateManyTripInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutTripInput | ShareLinkUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutTripInput | ShareLinkUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput> | UserFavoriteTripCreateWithoutTripInput[] | UserFavoriteTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserFavoriteTripCreateOrConnectWithoutTripInput | UserFavoriteTripCreateOrConnectWithoutTripInput[]
    upsert?: UserFavoriteTripUpsertWithWhereUniqueWithoutTripInput | UserFavoriteTripUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UserFavoriteTripCreateManyTripInputEnvelope
    set?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    disconnect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    delete?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    connect?: UserFavoriteTripWhereUniqueInput | UserFavoriteTripWhereUniqueInput[]
    update?: UserFavoriteTripUpdateWithWhereUniqueWithoutTripInput | UserFavoriteTripUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserFavoriteTripUpdateManyWithWhereWithoutTripInput | UserFavoriteTripUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
  }

  export type UserRecentTripUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput> | UserRecentTripCreateWithoutTripInput[] | UserRecentTripUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserRecentTripCreateOrConnectWithoutTripInput | UserRecentTripCreateOrConnectWithoutTripInput[]
    upsert?: UserRecentTripUpsertWithWhereUniqueWithoutTripInput | UserRecentTripUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UserRecentTripCreateManyTripInputEnvelope
    set?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    disconnect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    delete?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    connect?: UserRecentTripWhereUniqueInput | UserRecentTripWhereUniqueInput[]
    update?: UserRecentTripUpdateWithWhereUniqueWithoutTripInput | UserRecentTripUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserRecentTripUpdateManyWithWhereWithoutTripInput | UserRecentTripUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput
    connect?: TripWhereUniqueInput
  }

  export type EnumCollaboratorRoleFieldUpdateOperationsInput = {
    set?: $Enums.CollaboratorRole
  }

  export type UserUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    upsert?: UserUpsertWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaborationsInput, UserUpdateWithoutCollaborationsInput>, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type TripUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput
    upsert?: TripUpsertWithoutCollaboratorsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutCollaboratorsInput, TripUpdateWithoutCollaboratorsInput>, TripUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type TripCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<TripCreateWithoutMemoriesInput, TripUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMemoriesInput
    connect?: TripWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutMemoryInput = {
    create?: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput> | MediaCreateWithoutMemoryInput[] | MediaUncheckedCreateWithoutMemoryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMemoryInput | MediaCreateOrConnectWithoutMemoryInput[]
    createMany?: MediaCreateManyMemoryInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutMemoryInput = {
    create?: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput> | MediaCreateWithoutMemoryInput[] | MediaUncheckedCreateWithoutMemoryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMemoryInput | MediaCreateOrConnectWithoutMemoryInput[]
    createMany?: MediaCreateManyMemoryInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUpdateOneRequiredWithoutMemoriesNestedInput = {
    create?: XOR<TripCreateWithoutMemoriesInput, TripUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMemoriesInput
    upsert?: TripUpsertWithoutMemoriesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMemoriesInput, TripUpdateWithoutMemoriesInput>, TripUncheckedUpdateWithoutMemoriesInput>
  }

  export type MediaUpdateManyWithoutMemoryNestedInput = {
    create?: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput> | MediaCreateWithoutMemoryInput[] | MediaUncheckedCreateWithoutMemoryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMemoryInput | MediaCreateOrConnectWithoutMemoryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutMemoryInput | MediaUpsertWithWhereUniqueWithoutMemoryInput[]
    createMany?: MediaCreateManyMemoryInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutMemoryInput | MediaUpdateWithWhereUniqueWithoutMemoryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutMemoryInput | MediaUpdateManyWithWhereWithoutMemoryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutMemoryNestedInput = {
    create?: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput> | MediaCreateWithoutMemoryInput[] | MediaUncheckedCreateWithoutMemoryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMemoryInput | MediaCreateOrConnectWithoutMemoryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutMemoryInput | MediaUpsertWithWhereUniqueWithoutMemoryInput[]
    createMany?: MediaCreateManyMemoryInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutMemoryInput | MediaUpdateWithWhereUniqueWithoutMemoryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutMemoryInput | MediaUpdateManyWithWhereWithoutMemoryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MemoryCreateNestedOneWithoutMediaInput = {
    create?: XOR<MemoryCreateWithoutMediaInput, MemoryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MemoryCreateOrConnectWithoutMediaInput
    connect?: MemoryWhereUniqueInput
  }

  export type MemoryUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<MemoryCreateWithoutMediaInput, MemoryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MemoryCreateOrConnectWithoutMediaInput
    upsert?: MemoryUpsertWithoutMediaInput
    connect?: MemoryWhereUniqueInput
    update?: XOR<XOR<MemoryUpdateToOneWithWhereWithoutMediaInput, MemoryUpdateWithoutMediaInput>, MemoryUncheckedUpdateWithoutMediaInput>
  }

  export type TripCreateNestedOneWithoutPlacesInput = {
    create?: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlacesInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlacesInput
    upsert?: TripUpsertWithoutPlacesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPlacesInput, TripUpdateWithoutPlacesInput>, TripUncheckedUpdateWithoutPlacesInput>
  }

  export type TripCreateNestedOneWithoutTodoItemsInput = {
    create?: XOR<TripCreateWithoutTodoItemsInput, TripUncheckedCreateWithoutTodoItemsInput>
    connectOrCreate?: TripCreateOrConnectWithoutTodoItemsInput
    connect?: TripWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUpdateOneRequiredWithoutTodoItemsNestedInput = {
    create?: XOR<TripCreateWithoutTodoItemsInput, TripUncheckedCreateWithoutTodoItemsInput>
    connectOrCreate?: TripCreateOrConnectWithoutTodoItemsInput
    upsert?: TripUpsertWithoutTodoItemsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTodoItemsInput, TripUpdateWithoutTodoItemsInput>, TripUncheckedUpdateWithoutTodoItemsInput>
  }

  export type DayScheduleCreateplaceIdsInput = {
    set: string[]
  }

  export type TripCreateNestedOneWithoutDaySchedulesInput = {
    create?: XOR<TripCreateWithoutDaySchedulesInput, TripUncheckedCreateWithoutDaySchedulesInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaySchedulesInput
    connect?: TripWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DayScheduleUpdateplaceIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TripUpdateOneRequiredWithoutDaySchedulesNestedInput = {
    create?: XOR<TripCreateWithoutDaySchedulesInput, TripUncheckedCreateWithoutDaySchedulesInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaySchedulesInput
    upsert?: TripUpsertWithoutDaySchedulesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDaySchedulesInput, TripUpdateWithoutDaySchedulesInput>, TripUncheckedUpdateWithoutDaySchedulesInput>
  }

  export type TripCreateNestedOneWithoutShareLinksInput = {
    create?: XOR<TripCreateWithoutShareLinksInput, TripUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: TripCreateOrConnectWithoutShareLinksInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutShareLinksNestedInput = {
    create?: XOR<TripCreateWithoutShareLinksInput, TripUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: TripCreateOrConnectWithoutShareLinksInput
    upsert?: TripUpsertWithoutShareLinksInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutShareLinksInput, TripUpdateWithoutShareLinksInput>, TripUncheckedUpdateWithoutShareLinksInput>
  }

  export type UserCreateNestedOneWithoutFavoriteTripsInput = {
    create?: XOR<UserCreateWithoutFavoriteTripsInput, UserUncheckedCreateWithoutFavoriteTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTripsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutFavoritedByInput = {
    create?: XOR<TripCreateWithoutFavoritedByInput, TripUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: TripCreateOrConnectWithoutFavoritedByInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteTripsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteTripsInput, UserUncheckedCreateWithoutFavoriteTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTripsInput
    upsert?: UserUpsertWithoutFavoriteTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteTripsInput, UserUpdateWithoutFavoriteTripsInput>, UserUncheckedUpdateWithoutFavoriteTripsInput>
  }

  export type TripUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: XOR<TripCreateWithoutFavoritedByInput, TripUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: TripCreateOrConnectWithoutFavoritedByInput
    upsert?: TripUpsertWithoutFavoritedByInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutFavoritedByInput, TripUpdateWithoutFavoritedByInput>, TripUncheckedUpdateWithoutFavoritedByInput>
  }

  export type UserCreateNestedOneWithoutRecentTripsInput = {
    create?: XOR<UserCreateWithoutRecentTripsInput, UserUncheckedCreateWithoutRecentTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentTripsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutViewedByInput = {
    create?: XOR<TripCreateWithoutViewedByInput, TripUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: TripCreateOrConnectWithoutViewedByInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecentTripsNestedInput = {
    create?: XOR<UserCreateWithoutRecentTripsInput, UserUncheckedCreateWithoutRecentTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentTripsInput
    upsert?: UserUpsertWithoutRecentTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecentTripsInput, UserUpdateWithoutRecentTripsInput>, UserUncheckedUpdateWithoutRecentTripsInput>
  }

  export type TripUpdateOneRequiredWithoutViewedByNestedInput = {
    create?: XOR<TripCreateWithoutViewedByInput, TripUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: TripCreateOrConnectWithoutViewedByInput
    upsert?: TripUpsertWithoutViewedByInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutViewedByInput, TripUpdateWithoutViewedByInput>, TripUncheckedUpdateWithoutViewedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCollaboratorRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorRoleFilter<$PrismaModel> | $Enums.CollaboratorRole
  }

  export type NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorRole[] | ListEnumCollaboratorRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TripCreateWithoutOwnerInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutOwnerInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput>
  }

  export type TripCreateManyOwnerInputEnvelope = {
    data: TripCreateManyOwnerInput | TripCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TripCollaboratorCreateWithoutUserInput = {
    id?: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutCollaboratorsInput
  }

  export type TripCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type TripCollaboratorCreateOrConnectWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    create: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type TripCollaboratorCreateManyUserInputEnvelope = {
    data: TripCollaboratorCreateManyUserInput | TripCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFavoriteTripCreateWithoutUserInput = {
    trip: TripCreateNestedOneWithoutFavoritedByInput
  }

  export type UserFavoriteTripUncheckedCreateWithoutUserInput = {
    tripId: string
  }

  export type UserFavoriteTripCreateOrConnectWithoutUserInput = {
    where: UserFavoriteTripWhereUniqueInput
    create: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteTripCreateManyUserInputEnvelope = {
    data: UserFavoriteTripCreateManyUserInput | UserFavoriteTripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRecentTripCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutViewedByInput
  }

  export type UserRecentTripUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRecentTripCreateOrConnectWithoutUserInput = {
    where: UserRecentTripWhereUniqueInput
    create: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput>
  }

  export type UserRecentTripCreateManyUserInputEnvelope = {
    data: UserRecentTripCreateManyUserInput | UserRecentTripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutOwnerInput, TripUncheckedUpdateWithoutOwnerInput>
    create: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput>
  }

  export type TripUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutOwnerInput, TripUncheckedUpdateWithoutOwnerInput>
  }

  export type TripUpdateManyWithWhereWithoutOwnerInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    image?: StringNullableFilter<"Trip"> | string | null
    participants?: StringNullableListFilter<"Trip">
    ownerId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type TripCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    update: XOR<TripCollaboratorUpdateWithoutUserInput, TripCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type TripCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    data: XOR<TripCollaboratorUpdateWithoutUserInput, TripCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type TripCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: TripCollaboratorScalarWhereInput
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type TripCollaboratorScalarWhereInput = {
    AND?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
    OR?: TripCollaboratorScalarWhereInput[]
    NOT?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
    id?: StringFilter<"TripCollaborator"> | string
    userId?: StringFilter<"TripCollaborator"> | string
    tripId?: StringFilter<"TripCollaborator"> | string
    role?: EnumCollaboratorRoleFilter<"TripCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
  }

  export type UserFavoriteTripUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteTripWhereUniqueInput
    update: XOR<UserFavoriteTripUpdateWithoutUserInput, UserFavoriteTripUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteTripCreateWithoutUserInput, UserFavoriteTripUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteTripUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteTripWhereUniqueInput
    data: XOR<UserFavoriteTripUpdateWithoutUserInput, UserFavoriteTripUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteTripUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteTripScalarWhereInput
    data: XOR<UserFavoriteTripUpdateManyMutationInput, UserFavoriteTripUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavoriteTripScalarWhereInput = {
    AND?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
    OR?: UserFavoriteTripScalarWhereInput[]
    NOT?: UserFavoriteTripScalarWhereInput | UserFavoriteTripScalarWhereInput[]
    userId?: StringFilter<"UserFavoriteTrip"> | string
    tripId?: StringFilter<"UserFavoriteTrip"> | string
  }

  export type UserRecentTripUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRecentTripWhereUniqueInput
    update: XOR<UserRecentTripUpdateWithoutUserInput, UserRecentTripUncheckedUpdateWithoutUserInput>
    create: XOR<UserRecentTripCreateWithoutUserInput, UserRecentTripUncheckedCreateWithoutUserInput>
  }

  export type UserRecentTripUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRecentTripWhereUniqueInput
    data: XOR<UserRecentTripUpdateWithoutUserInput, UserRecentTripUncheckedUpdateWithoutUserInput>
  }

  export type UserRecentTripUpdateManyWithWhereWithoutUserInput = {
    where: UserRecentTripScalarWhereInput
    data: XOR<UserRecentTripUpdateManyMutationInput, UserRecentTripUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRecentTripScalarWhereInput = {
    AND?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
    OR?: UserRecentTripScalarWhereInput[]
    NOT?: UserRecentTripScalarWhereInput | UserRecentTripScalarWhereInput[]
    id?: StringFilter<"UserRecentTrip"> | string
    userId?: StringFilter<"UserRecentTrip"> | string
    tripId?: StringFilter<"UserRecentTrip"> | string
    viewedAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
    createdAt?: DateTimeFilter<"UserRecentTrip"> | Date | string
  }

  export type UserCreateWithoutTripsOwnedInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsOwnedInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripUncheckedCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsOwnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsOwnedInput, UserUncheckedCreateWithoutTripsOwnedInput>
  }

  export type MemoryCreateWithoutTripInput = {
    id?: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaCreateNestedManyWithoutMemoryInput
  }

  export type MemoryUncheckedCreateWithoutTripInput = {
    id?: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutMemoryInput
  }

  export type MemoryCreateOrConnectWithoutTripInput = {
    where: MemoryWhereUniqueInput
    create: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput>
  }

  export type MemoryCreateManyTripInputEnvelope = {
    data: MemoryCreateManyTripInput | MemoryCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type PlaceDataCreateWithoutTripInput = {
    id?: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type PlaceDataUncheckedCreateWithoutTripInput = {
    id?: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type PlaceDataCreateOrConnectWithoutTripInput = {
    where: PlaceDataWhereUniqueInput
    create: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput>
  }

  export type PlaceDataCreateManyTripInputEnvelope = {
    data: PlaceDataCreateManyTripInput | PlaceDataCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TodoItemCreateWithoutTripInput = {
    id?: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoItemUncheckedCreateWithoutTripInput = {
    id?: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoItemCreateOrConnectWithoutTripInput = {
    where: TodoItemWhereUniqueInput
    create: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput>
  }

  export type TodoItemCreateManyTripInputEnvelope = {
    data: TodoItemCreateManyTripInput | TodoItemCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type DayScheduleCreateWithoutTripInput = {
    id?: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayScheduleUncheckedCreateWithoutTripInput = {
    id?: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayScheduleCreateOrConnectWithoutTripInput = {
    where: DayScheduleWhereUniqueInput
    create: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput>
  }

  export type DayScheduleCreateManyTripInputEnvelope = {
    data: DayScheduleCreateManyTripInput | DayScheduleCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripCollaboratorCreateWithoutTripInput = {
    id?: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type TripCollaboratorUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type TripCollaboratorCreateOrConnectWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    create: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput>
  }

  export type TripCollaboratorCreateManyTripInputEnvelope = {
    data: TripCollaboratorCreateManyTripInput | TripCollaboratorCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type ShareLinkCreateWithoutTripInput = {
    id?: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type ShareLinkUncheckedCreateWithoutTripInput = {
    id?: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type ShareLinkCreateOrConnectWithoutTripInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput>
  }

  export type ShareLinkCreateManyTripInputEnvelope = {
    data: ShareLinkCreateManyTripInput | ShareLinkCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserFavoriteTripCreateWithoutTripInput = {
    user: UserCreateNestedOneWithoutFavoriteTripsInput
  }

  export type UserFavoriteTripUncheckedCreateWithoutTripInput = {
    userId: string
  }

  export type UserFavoriteTripCreateOrConnectWithoutTripInput = {
    where: UserFavoriteTripWhereUniqueInput
    create: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput>
  }

  export type UserFavoriteTripCreateManyTripInputEnvelope = {
    data: UserFavoriteTripCreateManyTripInput | UserFavoriteTripCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserRecentTripCreateWithoutTripInput = {
    id?: string
    viewedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecentTripsInput
  }

  export type UserRecentTripUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRecentTripCreateOrConnectWithoutTripInput = {
    where: UserRecentTripWhereUniqueInput
    create: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput>
  }

  export type UserRecentTripCreateManyTripInputEnvelope = {
    data: UserRecentTripCreateManyTripInput | UserRecentTripCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTripsOwnedInput = {
    update: XOR<UserUpdateWithoutTripsOwnedInput, UserUncheckedUpdateWithoutTripsOwnedInput>
    create: XOR<UserCreateWithoutTripsOwnedInput, UserUncheckedCreateWithoutTripsOwnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsOwnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsOwnedInput, UserUncheckedUpdateWithoutTripsOwnedInput>
  }

  export type UserUpdateWithoutTripsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUncheckedUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MemoryUpsertWithWhereUniqueWithoutTripInput = {
    where: MemoryWhereUniqueInput
    update: XOR<MemoryUpdateWithoutTripInput, MemoryUncheckedUpdateWithoutTripInput>
    create: XOR<MemoryCreateWithoutTripInput, MemoryUncheckedCreateWithoutTripInput>
  }

  export type MemoryUpdateWithWhereUniqueWithoutTripInput = {
    where: MemoryWhereUniqueInput
    data: XOR<MemoryUpdateWithoutTripInput, MemoryUncheckedUpdateWithoutTripInput>
  }

  export type MemoryUpdateManyWithWhereWithoutTripInput = {
    where: MemoryScalarWhereInput
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyWithoutTripInput>
  }

  export type MemoryScalarWhereInput = {
    AND?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
    OR?: MemoryScalarWhereInput[]
    NOT?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
    id?: StringFilter<"Memory"> | string
    tripId?: StringFilter<"Memory"> | string
    type?: StringFilter<"Memory"> | string
    content?: StringFilter<"Memory"> | string
    position?: JsonFilter<"Memory">
    size?: JsonFilter<"Memory">
    zIndex?: IntFilter<"Memory"> | number
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
  }

  export type PlaceDataUpsertWithWhereUniqueWithoutTripInput = {
    where: PlaceDataWhereUniqueInput
    update: XOR<PlaceDataUpdateWithoutTripInput, PlaceDataUncheckedUpdateWithoutTripInput>
    create: XOR<PlaceDataCreateWithoutTripInput, PlaceDataUncheckedCreateWithoutTripInput>
  }

  export type PlaceDataUpdateWithWhereUniqueWithoutTripInput = {
    where: PlaceDataWhereUniqueInput
    data: XOR<PlaceDataUpdateWithoutTripInput, PlaceDataUncheckedUpdateWithoutTripInput>
  }

  export type PlaceDataUpdateManyWithWhereWithoutTripInput = {
    where: PlaceDataScalarWhereInput
    data: XOR<PlaceDataUpdateManyMutationInput, PlaceDataUncheckedUpdateManyWithoutTripInput>
  }

  export type PlaceDataScalarWhereInput = {
    AND?: PlaceDataScalarWhereInput | PlaceDataScalarWhereInput[]
    OR?: PlaceDataScalarWhereInput[]
    NOT?: PlaceDataScalarWhereInput | PlaceDataScalarWhereInput[]
    id?: StringFilter<"PlaceData"> | string
    tripId?: StringFilter<"PlaceData"> | string
    name?: StringFilter<"PlaceData"> | string
    address?: StringNullableFilter<"PlaceData"> | string | null
    coordinates?: JsonNullableFilter<"PlaceData">
    category?: StringNullableFilter<"PlaceData"> | string | null
    description?: StringNullableFilter<"PlaceData"> | string | null
    createdAt?: DateTimeFilter<"PlaceData"> | Date | string
  }

  export type TodoItemUpsertWithWhereUniqueWithoutTripInput = {
    where: TodoItemWhereUniqueInput
    update: XOR<TodoItemUpdateWithoutTripInput, TodoItemUncheckedUpdateWithoutTripInput>
    create: XOR<TodoItemCreateWithoutTripInput, TodoItemUncheckedCreateWithoutTripInput>
  }

  export type TodoItemUpdateWithWhereUniqueWithoutTripInput = {
    where: TodoItemWhereUniqueInput
    data: XOR<TodoItemUpdateWithoutTripInput, TodoItemUncheckedUpdateWithoutTripInput>
  }

  export type TodoItemUpdateManyWithWhereWithoutTripInput = {
    where: TodoItemScalarWhereInput
    data: XOR<TodoItemUpdateManyMutationInput, TodoItemUncheckedUpdateManyWithoutTripInput>
  }

  export type TodoItemScalarWhereInput = {
    AND?: TodoItemScalarWhereInput | TodoItemScalarWhereInput[]
    OR?: TodoItemScalarWhereInput[]
    NOT?: TodoItemScalarWhereInput | TodoItemScalarWhereInput[]
    id?: StringFilter<"TodoItem"> | string
    tripId?: StringFilter<"TodoItem"> | string
    text?: StringFilter<"TodoItem"> | string
    completed?: BoolFilter<"TodoItem"> | boolean
    order?: IntNullableFilter<"TodoItem"> | number | null
    createdAt?: DateTimeFilter<"TodoItem"> | Date | string
    updatedAt?: DateTimeFilter<"TodoItem"> | Date | string
  }

  export type DayScheduleUpsertWithWhereUniqueWithoutTripInput = {
    where: DayScheduleWhereUniqueInput
    update: XOR<DayScheduleUpdateWithoutTripInput, DayScheduleUncheckedUpdateWithoutTripInput>
    create: XOR<DayScheduleCreateWithoutTripInput, DayScheduleUncheckedCreateWithoutTripInput>
  }

  export type DayScheduleUpdateWithWhereUniqueWithoutTripInput = {
    where: DayScheduleWhereUniqueInput
    data: XOR<DayScheduleUpdateWithoutTripInput, DayScheduleUncheckedUpdateWithoutTripInput>
  }

  export type DayScheduleUpdateManyWithWhereWithoutTripInput = {
    where: DayScheduleScalarWhereInput
    data: XOR<DayScheduleUpdateManyMutationInput, DayScheduleUncheckedUpdateManyWithoutTripInput>
  }

  export type DayScheduleScalarWhereInput = {
    AND?: DayScheduleScalarWhereInput | DayScheduleScalarWhereInput[]
    OR?: DayScheduleScalarWhereInput[]
    NOT?: DayScheduleScalarWhereInput | DayScheduleScalarWhereInput[]
    id?: StringFilter<"DaySchedule"> | string
    tripId?: StringFilter<"DaySchedule"> | string
    day?: IntFilter<"DaySchedule"> | number
    date?: DateTimeNullableFilter<"DaySchedule"> | Date | string | null
    placeIds?: StringNullableListFilter<"DaySchedule">
    createdAt?: DateTimeFilter<"DaySchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DaySchedule"> | Date | string
  }

  export type TripCollaboratorUpsertWithWhereUniqueWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    update: XOR<TripCollaboratorUpdateWithoutTripInput, TripCollaboratorUncheckedUpdateWithoutTripInput>
    create: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput>
  }

  export type TripCollaboratorUpdateWithWhereUniqueWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    data: XOR<TripCollaboratorUpdateWithoutTripInput, TripCollaboratorUncheckedUpdateWithoutTripInput>
  }

  export type TripCollaboratorUpdateManyWithWhereWithoutTripInput = {
    where: TripCollaboratorScalarWhereInput
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyWithoutTripInput>
  }

  export type ShareLinkUpsertWithWhereUniqueWithoutTripInput = {
    where: ShareLinkWhereUniqueInput
    update: XOR<ShareLinkUpdateWithoutTripInput, ShareLinkUncheckedUpdateWithoutTripInput>
    create: XOR<ShareLinkCreateWithoutTripInput, ShareLinkUncheckedCreateWithoutTripInput>
  }

  export type ShareLinkUpdateWithWhereUniqueWithoutTripInput = {
    where: ShareLinkWhereUniqueInput
    data: XOR<ShareLinkUpdateWithoutTripInput, ShareLinkUncheckedUpdateWithoutTripInput>
  }

  export type ShareLinkUpdateManyWithWhereWithoutTripInput = {
    where: ShareLinkScalarWhereInput
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyWithoutTripInput>
  }

  export type ShareLinkScalarWhereInput = {
    AND?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    OR?: ShareLinkScalarWhereInput[]
    NOT?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    tripId?: StringFilter<"ShareLink"> | string
    token?: StringFilter<"ShareLink"> | string
    role?: EnumCollaboratorRoleFilter<"ShareLink"> | $Enums.CollaboratorRole
    scope?: StringFilter<"ShareLink"> | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    createdBy?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
  }

  export type UserFavoriteTripUpsertWithWhereUniqueWithoutTripInput = {
    where: UserFavoriteTripWhereUniqueInput
    update: XOR<UserFavoriteTripUpdateWithoutTripInput, UserFavoriteTripUncheckedUpdateWithoutTripInput>
    create: XOR<UserFavoriteTripCreateWithoutTripInput, UserFavoriteTripUncheckedCreateWithoutTripInput>
  }

  export type UserFavoriteTripUpdateWithWhereUniqueWithoutTripInput = {
    where: UserFavoriteTripWhereUniqueInput
    data: XOR<UserFavoriteTripUpdateWithoutTripInput, UserFavoriteTripUncheckedUpdateWithoutTripInput>
  }

  export type UserFavoriteTripUpdateManyWithWhereWithoutTripInput = {
    where: UserFavoriteTripScalarWhereInput
    data: XOR<UserFavoriteTripUpdateManyMutationInput, UserFavoriteTripUncheckedUpdateManyWithoutTripInput>
  }

  export type UserRecentTripUpsertWithWhereUniqueWithoutTripInput = {
    where: UserRecentTripWhereUniqueInput
    update: XOR<UserRecentTripUpdateWithoutTripInput, UserRecentTripUncheckedUpdateWithoutTripInput>
    create: XOR<UserRecentTripCreateWithoutTripInput, UserRecentTripUncheckedCreateWithoutTripInput>
  }

  export type UserRecentTripUpdateWithWhereUniqueWithoutTripInput = {
    where: UserRecentTripWhereUniqueInput
    data: XOR<UserRecentTripUpdateWithoutTripInput, UserRecentTripUncheckedUpdateWithoutTripInput>
  }

  export type UserRecentTripUpdateManyWithWhereWithoutTripInput = {
    where: UserRecentTripScalarWhereInput
    data: XOR<UserRecentTripUpdateManyMutationInput, UserRecentTripUncheckedUpdateManyWithoutTripInput>
  }

  export type UserCreateWithoutCollaborationsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripCreateNestedManyWithoutOwnerInput
    favoriteTrips?: UserFavoriteTripCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripUncheckedCreateNestedManyWithoutOwnerInput
    favoriteTrips?: UserFavoriteTripUncheckedCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
  }

  export type TripCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCollaboratorsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserUpsertWithoutCollaborationsInput = {
    update: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type UserUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUpdateManyWithoutOwnerNestedInput
    favoriteTrips?: UserFavoriteTripUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    favoriteTrips?: UserFavoriteTripUncheckedUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutCollaboratorsInput = {
    update: XOR<TripUpdateWithoutCollaboratorsInput, TripUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutCollaboratorsInput, TripUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type TripUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutMemoriesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutMemoriesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMemoriesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMemoriesInput, TripUncheckedCreateWithoutMemoriesInput>
  }

  export type MediaCreateWithoutMemoryInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    createdAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutMemoryInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutMemoryInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput>
  }

  export type MediaCreateManyMemoryInputEnvelope = {
    data: MediaCreateManyMemoryInput | MediaCreateManyMemoryInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutMemoriesInput = {
    update: XOR<TripUpdateWithoutMemoriesInput, TripUncheckedUpdateWithoutMemoriesInput>
    create: XOR<TripCreateWithoutMemoriesInput, TripUncheckedCreateWithoutMemoriesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMemoriesInput, TripUncheckedUpdateWithoutMemoriesInput>
  }

  export type TripUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutMemoryInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutMemoryInput, MediaUncheckedUpdateWithoutMemoryInput>
    create: XOR<MediaCreateWithoutMemoryInput, MediaUncheckedCreateWithoutMemoryInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutMemoryInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutMemoryInput, MediaUncheckedUpdateWithoutMemoryInput>
  }

  export type MediaUpdateManyWithWhereWithoutMemoryInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutMemoryInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    provider?: StringNullableFilter<"Media"> | string | null
    publicId?: StringNullableFilter<"Media"> | string | null
    memoryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type MemoryCreateWithoutMediaInput = {
    id?: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutMemoriesInput
  }

  export type MemoryUncheckedCreateWithoutMediaInput = {
    id?: string
    tripId: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryCreateOrConnectWithoutMediaInput = {
    where: MemoryWhereUniqueInput
    create: XOR<MemoryCreateWithoutMediaInput, MemoryUncheckedCreateWithoutMediaInput>
  }

  export type MemoryUpsertWithoutMediaInput = {
    update: XOR<MemoryUpdateWithoutMediaInput, MemoryUncheckedUpdateWithoutMediaInput>
    create: XOR<MemoryCreateWithoutMediaInput, MemoryUncheckedCreateWithoutMediaInput>
    where?: MemoryWhereInput
  }

  export type MemoryUpdateToOneWithWhereWithoutMediaInput = {
    where?: MemoryWhereInput
    data: XOR<MemoryUpdateWithoutMediaInput, MemoryUncheckedUpdateWithoutMediaInput>
  }

  export type MemoryUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutMemoriesNestedInput
  }

  export type MemoryUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateWithoutPlacesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPlacesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPlacesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
  }

  export type TripUpsertWithoutPlacesInput = {
    update: XOR<TripUpdateWithoutPlacesInput, TripUncheckedUpdateWithoutPlacesInput>
    create: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPlacesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPlacesInput, TripUncheckedUpdateWithoutPlacesInput>
  }

  export type TripUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutTodoItemsInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTodoItemsInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTodoItemsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTodoItemsInput, TripUncheckedCreateWithoutTodoItemsInput>
  }

  export type TripUpsertWithoutTodoItemsInput = {
    update: XOR<TripUpdateWithoutTodoItemsInput, TripUncheckedUpdateWithoutTodoItemsInput>
    create: XOR<TripCreateWithoutTodoItemsInput, TripUncheckedCreateWithoutTodoItemsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTodoItemsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTodoItemsInput, TripUncheckedUpdateWithoutTodoItemsInput>
  }

  export type TripUpdateWithoutTodoItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTodoItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutDaySchedulesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDaySchedulesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDaySchedulesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDaySchedulesInput, TripUncheckedCreateWithoutDaySchedulesInput>
  }

  export type TripUpsertWithoutDaySchedulesInput = {
    update: XOR<TripUpdateWithoutDaySchedulesInput, TripUncheckedUpdateWithoutDaySchedulesInput>
    create: XOR<TripCreateWithoutDaySchedulesInput, TripUncheckedCreateWithoutDaySchedulesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDaySchedulesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDaySchedulesInput, TripUncheckedUpdateWithoutDaySchedulesInput>
  }

  export type TripUpdateWithoutDaySchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDaySchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutShareLinksInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutShareLinksInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutShareLinksInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutShareLinksInput, TripUncheckedCreateWithoutShareLinksInput>
  }

  export type TripUpsertWithoutShareLinksInput = {
    update: XOR<TripUpdateWithoutShareLinksInput, TripUncheckedUpdateWithoutShareLinksInput>
    create: XOR<TripCreateWithoutShareLinksInput, TripUncheckedCreateWithoutShareLinksInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutShareLinksInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutShareLinksInput, TripUncheckedUpdateWithoutShareLinksInput>
  }

  export type TripUpdateWithoutShareLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutShareLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutFavoriteTripsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteTripsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripUncheckedCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    recentTrips?: UserRecentTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteTripsInput, UserUncheckedCreateWithoutFavoriteTripsInput>
  }

  export type TripCreateWithoutFavoritedByInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutFavoritedByInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    viewedBy?: UserRecentTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutFavoritedByInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutFavoritedByInput, TripUncheckedCreateWithoutFavoritedByInput>
  }

  export type UserUpsertWithoutFavoriteTripsInput = {
    update: XOR<UserUpdateWithoutFavoriteTripsInput, UserUncheckedUpdateWithoutFavoriteTripsInput>
    create: XOR<UserCreateWithoutFavoriteTripsInput, UserUncheckedCreateWithoutFavoriteTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteTripsInput, UserUncheckedUpdateWithoutFavoriteTripsInput>
  }

  export type UserUpdateWithoutFavoriteTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    recentTrips?: UserRecentTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutFavoritedByInput = {
    update: XOR<TripUpdateWithoutFavoritedByInput, TripUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<TripCreateWithoutFavoritedByInput, TripUncheckedCreateWithoutFavoritedByInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutFavoritedByInput, TripUncheckedUpdateWithoutFavoritedByInput>
  }

  export type TripUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutRecentTripsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecentTripsInput = {
    id?: string
    email: string
    username: string
    token: string
    salt: string
    hash: string
    admin?: boolean
    profilePhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsOwned?: TripUncheckedCreateNestedManyWithoutOwnerInput
    collaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    favoriteTrips?: UserFavoriteTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecentTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecentTripsInput, UserUncheckedCreateWithoutRecentTripsInput>
  }

  export type TripCreateWithoutViewedByInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTripsOwnedInput
    memories?: MemoryCreateNestedManyWithoutTripInput
    places?: PlaceDataCreateNestedManyWithoutTripInput
    todoItems?: TodoItemCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutViewedByInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutTripInput
    places?: PlaceDataUncheckedCreateNestedManyWithoutTripInput
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTripInput
    daySchedules?: DayScheduleUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutTripInput
    favoritedBy?: UserFavoriteTripUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutViewedByInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutViewedByInput, TripUncheckedCreateWithoutViewedByInput>
  }

  export type UserUpsertWithoutRecentTripsInput = {
    update: XOR<UserUpdateWithoutRecentTripsInput, UserUncheckedUpdateWithoutRecentTripsInput>
    create: XOR<UserCreateWithoutRecentTripsInput, UserUncheckedCreateWithoutRecentTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecentTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecentTripsInput, UserUncheckedUpdateWithoutRecentTripsInput>
  }

  export type UserUpdateWithoutRecentTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecentTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsOwned?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    collaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrips?: UserFavoriteTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutViewedByInput = {
    update: XOR<TripUpdateWithoutViewedByInput, TripUncheckedUpdateWithoutViewedByInput>
    create: XOR<TripCreateWithoutViewedByInput, TripUncheckedCreateWithoutViewedByInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutViewedByInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutViewedByInput, TripUncheckedUpdateWithoutViewedByInput>
  }

  export type TripUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyOwnerInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    image?: string | null
    participants?: TripCreateparticipantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorCreateManyUserInput = {
    id?: string
    tripId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type UserFavoriteTripCreateManyUserInput = {
    tripId: string
  }

  export type UserRecentTripCreateManyUserInput = {
    id?: string
    tripId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type TripUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUpdateManyWithoutTripNestedInput
    places?: PlaceDataUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutTripNestedInput
    places?: PlaceDataUncheckedUpdateManyWithoutTripNestedInput
    todoItems?: TodoItemUncheckedUpdateManyWithoutTripNestedInput
    daySchedules?: DayScheduleUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutTripNestedInput
    favoritedBy?: UserFavoriteTripUncheckedUpdateManyWithoutTripNestedInput
    viewedBy?: UserRecentTripUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: TripUpdateparticipantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteTripUpdateWithoutUserInput = {
    trip?: TripUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type UserFavoriteTripUncheckedUpdateWithoutUserInput = {
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavoriteTripUncheckedUpdateManyWithoutUserInput = {
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRecentTripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type UserRecentTripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentTripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCreateManyTripInput = {
    id?: string
    type: string
    content: string
    position: JsonNullValueInput | InputJsonValue
    size: JsonNullValueInput | InputJsonValue
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaceDataCreateManyTripInput = {
    id?: string
    name: string
    address?: string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type TodoItemCreateManyTripInput = {
    id?: string
    text: string
    completed?: boolean
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayScheduleCreateManyTripInput = {
    id?: string
    day: number
    date?: Date | string | null
    placeIds?: DayScheduleCreateplaceIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorCreateManyTripInput = {
    id?: string
    userId: string
    role?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type ShareLinkCreateManyTripInput = {
    id?: string
    token: string
    role?: $Enums.CollaboratorRole
    scope?: string
    expiresAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type UserFavoriteTripCreateManyTripInput = {
    userId: string
  }

  export type UserRecentTripCreateManyTripInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
    createdAt?: Date | string
  }

  export type MemoryUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateManyWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: JsonNullValueInput | InputJsonValue
    size?: JsonNullValueInput | InputJsonValue
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoItemUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayScheduleUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placeIds?: DayScheduleUpdateplaceIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    scope?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteTripUpdateWithoutTripInput = {
    user?: UserUpdateOneRequiredWithoutFavoriteTripsNestedInput
  }

  export type UserFavoriteTripUncheckedUpdateWithoutTripInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavoriteTripUncheckedUpdateManyWithoutTripInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRecentTripUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecentTripsNestedInput
  }

  export type UserRecentTripUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentTripUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyMemoryInput = {
    id?: string
    url: string
    provider?: string | null
    publicId?: string | null
    createdAt?: Date | string
  }

  export type MediaUpdateWithoutMemoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutMemoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutMemoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}