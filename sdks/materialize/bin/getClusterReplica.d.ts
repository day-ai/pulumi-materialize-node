import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getClusterReplica(args?: GetClusterReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterReplicaResult>;
/**
 * A collection of arguments for invoking getClusterReplica.
 */
export interface GetClusterReplicaArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getClusterReplica.
 */
export interface GetClusterReplicaResult {
    readonly clusterReplicas: outputs.GetClusterReplicaClusterReplica[];
    readonly id: string;
    readonly region: string;
}
export declare function getClusterReplicaOutput(args?: GetClusterReplicaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterReplicaResult>;
/**
 * A collection of arguments for invoking getClusterReplica.
 */
export interface GetClusterReplicaOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
