import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Type extends pulumi.CustomResource {
    /**
     * Get an existing Type resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TypeState, opts?: pulumi.CustomResourceOptions): Type;
    /**
     * Returns true if the given object is an instance of Type.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Type;
    /**
     * Type category.
     */
    readonly category: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The identifier for the type database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * List properties.
     */
    readonly listProperties: pulumi.Output<outputs.TypeListProperties | undefined>;
    /**
     * Map properties.
     */
    readonly mapProperties: pulumi.Output<outputs.TypeMapProperties | undefined>;
    /**
     * The identifier for the type.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the type.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * Row properties.
     */
    readonly rowProperties: pulumi.Output<outputs.TypeRowProperty[] | undefined>;
    /**
     * The identifier for the type schema in Materialize. Defaults to `public`.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    readonly typeId: pulumi.Output<string>;
    /**
     * Create a Type resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TypeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Type resources.
 */
export interface TypeState {
    /**
     * Type category.
     */
    category?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the type database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * List properties.
     */
    listProperties?: pulumi.Input<inputs.TypeListProperties>;
    /**
     * Map properties.
     */
    mapProperties?: pulumi.Input<inputs.TypeMapProperties>;
    /**
     * The identifier for the type.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the type.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * Row properties.
     */
    rowProperties?: pulumi.Input<pulumi.Input<inputs.TypeRowProperty>[]>;
    /**
     * The identifier for the type schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    typeId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Type resource.
 */
export interface TypeArgs {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the type database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * List properties.
     */
    listProperties?: pulumi.Input<inputs.TypeListProperties>;
    /**
     * Map properties.
     */
    mapProperties?: pulumi.Input<inputs.TypeMapProperties>;
    /**
     * The identifier for the type.
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
     * Row properties.
     */
    rowProperties?: pulumi.Input<pulumi.Input<inputs.TypeRowProperty>[]>;
    /**
     * The identifier for the type schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    typeId?: pulumi.Input<string>;
}
