import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SourceMysql extends pulumi.CustomResource {
    /**
     * Get an existing SourceMysql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceMysqlState, opts?: pulumi.CustomResourceOptions): SourceMysql;
    /**
     * Returns true if the given object is an instance of SourceMysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceMysql;
    /**
     * The cluster to maintain this source.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    readonly exposeProgress: pulumi.Output<outputs.SourceMysqlExposeProgress | undefined>;
    /**
     * Ignore specific columns when reading data from MySQL. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    readonly ignoreColumns: pulumi.Output<string[] | undefined>;
    /**
     * The MySQL connection to use in the source.
     */
    readonly mysqlConnection: pulumi.Output<outputs.SourceMysqlMysqlConnection>;
    /**
     * The identifier for the source.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the source.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The size of the cluster maintaining this source.
     */
    readonly size: pulumi.Output<string>;
    readonly sourceMysqlId: pulumi.Output<string>;
    /**
     * Specify the tables to be included in the source. If not specified, all tables are included.
     */
    readonly tables: pulumi.Output<outputs.SourceMysqlTable[] | undefined>;
    /**
     * Decode data as text for specific columns that contain MySQL types that are unsupported in Materialize. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    readonly textColumns: pulumi.Output<string[] | undefined>;
    /**
     * Create a SourceMysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceMysqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceMysql resources.
 */
export interface SourceMysqlState {
    /**
     * The cluster to maintain this source.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    exposeProgress?: pulumi.Input<inputs.SourceMysqlExposeProgress>;
    /**
     * Ignore specific columns when reading data from MySQL. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    ignoreColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The MySQL connection to use in the source.
     */
    mysqlConnection?: pulumi.Input<inputs.SourceMysqlMysqlConnection>;
    /**
     * The identifier for the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the source.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The size of the cluster maintaining this source.
     */
    size?: pulumi.Input<string>;
    sourceMysqlId?: pulumi.Input<string>;
    /**
     * Specify the tables to be included in the source. If not specified, all tables are included.
     */
    tables?: pulumi.Input<pulumi.Input<inputs.SourceMysqlTable>[]>;
    /**
     * Decode data as text for specific columns that contain MySQL types that are unsupported in Materialize. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    textColumns?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a SourceMysql resource.
 */
export interface SourceMysqlArgs {
    /**
     * The cluster to maintain this source.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    exposeProgress?: pulumi.Input<inputs.SourceMysqlExposeProgress>;
    /**
     * Ignore specific columns when reading data from MySQL. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    ignoreColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The MySQL connection to use in the source.
     */
    mysqlConnection: pulumi.Input<inputs.SourceMysqlMysqlConnection>;
    /**
     * The identifier for the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    sourceMysqlId?: pulumi.Input<string>;
    /**
     * Specify the tables to be included in the source. If not specified, all tables are included.
     */
    tables?: pulumi.Input<pulumi.Input<inputs.SourceMysqlTable>[]>;
    /**
     * Decode data as text for specific columns that contain MySQL types that are unsupported in Materialize. Can only be updated in place when also updating a corresponding <span pulumi-lang-nodejs="`table`" pulumi-lang-dotnet="`Table`" pulumi-lang-go="`table`" pulumi-lang-python="`table`" pulumi-lang-yaml="`table`" pulumi-lang-java="`table`">`table`</span> attribute.
     */
    textColumns?: pulumi.Input<pulumi.Input<string>[]>;
}
